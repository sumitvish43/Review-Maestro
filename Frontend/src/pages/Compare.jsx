import React from "react";
import { PageLoader } from "../components";
import { Header, CompareTable } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Compare = () => {
  const { loading } = useStateContext();

  return loading ? (
    <PageLoader />
  ) : (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App Stats" title="Compare" />
      <CompareTable />
    </div>
  );
};
export default Compare;
