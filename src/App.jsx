import React from "react";

import { DataProvider } from "./context/Datacontext";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </div>
  );
};

export default App;