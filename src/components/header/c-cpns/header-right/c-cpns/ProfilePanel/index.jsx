import React, { memo } from "react";
import Panel from "./style";
const ProfilePanel = memo((props) => {
  return (
    <Panel>
      <div className="top">
        <div>注册</div>
        <div>登录</div>
      </div>
      <div className="bottom">
        <div>出租房源</div>
        <div>举办活动</div>
        <div>协助</div>
      </div>
    </Panel>
  );
});

export default ProfilePanel;
