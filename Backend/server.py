# 2 improvements ->
# Create a function for appending prediction(i.e topic/sentiment) and og data.
# dont fetch review on every api call, instead find a way to fetch reviews only once.

from emot.emo_unicode import EMOTICONS_EMO
from emot.emo_unicode import UNICODE_EMOJI
from google_play_scraper import Sort, reviews
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.compose import ColumnTransformer, make_column_transformer
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS
# import matplotlib.pyplot as plt
import re
import nltk
# Check whether this download command works or not else need to download manually
nltk.download('stopwords')
# nltk.download('wordnet')
# This is stemming


app = Flask(__name__)
CORS(app)
# API Routes -----------------------------------------------------------------------------------------------------------------------

sentiment_model = pickle.load(open('model.pkl', 'rb'))
topic_model = pickle.load(open('topic_model.pkl', 'rb'))


@app.route('/')
def hello_world():
    return render_template("showdata.html")


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    # print(request.form)
    app_name = request.args.get('for')
    df = fetch_data(app_name)
    # print(dataset)
    # print("\n\n\n")
    sentiment_dataset = preprocess_data(df, 3000)
    topic_dataset = preprocess_data(df, 6999)
    
    sentiment_output = sentiment_model.predict(sentiment_dataset)
    topic_output = topic_model.predict(topic_dataset)
    # appending prediction(i.e topic/sentiment) and og data.
    y1_df = pd.DataFrame(sentiment_output, columns=['sentiment'])
    res = pd.concat([df, y1_df], axis=1)
    
    y2_df = pd.DataFrame(topic_output, columns=['topics'])
    res = pd.concat([res, y2_df], axis=1)
    return jsonify(res.to_json(orient='records'))
    # return output
    # response

# Sentiment Value is 1 & 0
# 1 --> Positive
# 0 --> Negative


# @app.route('/classify-topics', methods=['POST', 'GET'])
# def classify_topics():
#     # print(request.form)
#     app_name = request.args.get('for')
#     df = fetch_data(app_name)
#     # print(dataset)
#     # print("\n\n\n")
#     dataset = preprocess_data(df, 6999)
#     output = topic_model.predict(dataset)
#     # appending prediction(i.e topic/sentiment) and og data.
#     y_df = pd.DataFrame(output, columns=['topics'])
#     res = pd.concat([df, y_df], axis=1)
#     return jsonify(res.to_json(orient='records'))
#     # return output
#     # response


# mapping of idx to topic | 1st element is 0
'''['aesthetics' 'compatibility' 'cost' 'effectiveness' 'efficiency'
 'enjoyability' 'general' 'learnability' 'reliability' 'safety' 'security'
 'usability']'''
# mapping of idx to topic |

# Utility Functions ------------------------------------------------------------------------------------------------------------------


def fetch_data(appName):
    review, continuation_token = reviews(
        appName,  # 'us.zoom.videomeetings'
        count=1000
    )

    for i in range(1, 10):
        result, continuation_token = reviews(
            appName,  # 'us.zoom.videomeetings'
            count=1000,
            # defaults to None(load from the beginning)
            continuation_token=continuation_token
        )
    review.extend(result)
    reviews_dataset = pd.DataFrame(
        data=review).loc[:, ['reviewId', 'userName', 'content', 'score', 'at']]
    reviews_dataset.rename(columns={'reviewId': 'review_id', 'content': 'review',
                           'userName': 'authorName', 'at': 'postedAt', 'score': 'rating'}, inplace=True)
    return reviews_dataset

# 'review_id','review','rating','sentiment'

# preprocssing Utilities ------------------------------------------------------------------------------------------------------------------


def convert_emoji(text):
    for emot in UNICODE_EMOJI:
        text = text.replace(emot, "_".join(
            UNICODE_EMOJI[emot].replace(",", "").replace(":", "").split()))
    return text


def convert_emoticons(text):
    for emot in EMOTICONS_EMO:
        text = text.replace(emot, "_".join(
            EMOTICONS_EMO[emot].replace(",", "").split()))
    return text


# Global Variable
pattern = re.compile(r'(.)\1*')


def reduce_sequence_word(word):
    return ''.join([match.group()[:2] if len(match.group()) > 2 else match.group() for match in pattern.finditer(word)])


def reduce_sequence_review(review):
    return ''.join([reduce_sequence_word(word) for word in review])


stopwords_to_consider = []
stopwords_to_consider = ['on', 'off', 'no', 'nor', 'not', "don't", 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't",
                         'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]


def text_preprocessor(review):
    processed_r = re.sub('[^a-zA-z]', ' ', review)
    processed_r = processed_r.lower()
    processed_r = processed_r.split()
    all_stopwords = [w for w in stopwords.words(
        'english') if not w in stopwords_to_consider]
    # This is stemming
    ps = PorterStemmer()
    processed_r = [ps.stem(word)
                   for word in processed_r if not word in set(all_stopwords)]
    # this is lemmatization
    # lemmatizer = WordNetLemmatizer()
    # processed_r = [lemmatizer.lemmatize(word) for word in processed_r if not word in set(all_stopwords)]
    return ' '.join(processed_r)

# Main Function


def preprocess_data(dataset, features):
    dataset = dataset.dropna()
    dataset['review'] = dataset['review'].apply(convert_emoji)
    dataset['review'] = dataset['review'].apply(convert_emoticons)
    dataset['review'] = dataset['review'].apply(reduce_sequence_review)
    dataset['review'] = dataset['review'].apply(text_preprocessor)
    X = dataset.iloc[:, 2:-1].values
    # print(X)
    preprocess = ColumnTransformer(transformers=[('vectorize', TfidfVectorizer(
        ngram_range=(1, 2), max_features=features), 0)], remainder='passthrough')
    X = preprocess.fit_transform(X).toarray()
    # print(X)
    return X


app.run(debug=True)