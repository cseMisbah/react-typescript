import React from "react";

type dataFetchProps = { status: "loading" | "error" | "success" };

const DataFetch = ({ status }: dataFetchProps) => {
  if (status === "loading") {
    return <h2>Data is loading </h2>;
  } else if (status === "error") {
    return <h2>Error. data could not fetch</h2>;
  }

  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
};

export default DataFetch;

/*


const DataFetch = ({ status }: { status: string }) => {
  if (status === "loading") {
    return <h2>Data is loading </h2>;
  } else if (status === "error") {
    return <h2>Error. data could not fetch</h2>;
  }

  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
};

export default DataFetch;


function App() {
  return (
    <div className="app">
      <h1>User Management</h1>

      <DataFetch status="success"></DataFetch>
    </div>
  );
}

export default App;
*/
