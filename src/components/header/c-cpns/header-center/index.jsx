import IconSearchBar from "@/assets/svg/icon-search-bar.jsx";
import React, { memo } from "react";
import CenterWrapper from "./style.js";
const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div>任何地方</div>
      <div className="center">任1键</div>
      <div className="right">
        <div>新增人数</div>
        <div className="icon-search">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
