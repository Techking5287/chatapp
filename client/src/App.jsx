import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import React from "react";

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
