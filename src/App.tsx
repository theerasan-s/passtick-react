import React from "react";
import { Route } from "react-router";
import testPage from "./page/TestPage/testPage";
import NavigationBar from "./NavigationBar/NavigationBar";
import "antd/dist/antd.css";
import { GlobalStyles } from "./components/Typography/Typography";

function App() {
  return (
    <div>
      <GlobalStyles />
      <NavigationBar />
      <Route path="/test" component={testPage}></Route>
    </div>
  );
}

export default App;
