import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import "@/assets/styles/index.less";
import routes from "@/router";
const App = memo((props) => {
  return (
    <div>
      <div>header</div>
      <div>{useRoutes(routes)}</div>
      <div>footer</div>
    </div>
  );
});

export default App;
