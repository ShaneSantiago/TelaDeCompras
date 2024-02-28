import React from "react";
import { GlobalProvider } from "./Components/GlobalContext/GlobalContext";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
      <GlobalProvider>
        <Routers />
      </GlobalProvider>
    </>
  );
}

export default App;
