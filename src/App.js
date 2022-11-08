import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "./Component/Pages/Header/Header";
import router from "./Component/Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
