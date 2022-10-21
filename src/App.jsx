import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import "@/assets/styles/index.less";
import routes from "@/router";
import AppHeader from "@comp/header";
import AppFooter from "@comp/footer";
const App = memo((props) => {
  return (
    <div>
      <AppHeader />
      <div>{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
