import React, { memo } from "react";
import HeaderWrapper from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft className="left" />
      <HeaderCenter className="center" />
      <HeaderRight className="right" />
    </HeaderWrapper>
  );
});

export default AppHeader;
