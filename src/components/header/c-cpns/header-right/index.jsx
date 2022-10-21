import React, { memo, useEffect, useState } from "react";
import RightWrapper from "./style.js";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu.jsx";
import IconAvatar from "@/assets/svg/icon_avatar.jsx";
import ProfilePanel from "./c-cpns/ProfilePanel";
const HeaderRight = memo(() => {
  const [isPanelShow, setIsPanelShow] = useState(false);
  const panelChangeHandler = () => {
    console.log(111);
    setIsPanelShow(true);
  };
  useEffect(() => {
    function addlistener() {
      setIsPanelShow(false);
    }
    window.addEventListener("click", addlistener, true);
    return () => {
      window.removeEventListener("click", addlistener);
    };
  }, []);
  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={(e) => panelChangeHandler()}>
        <div className="icon-menu">
          <IconMenu />
        </div>
        <div className="icon-avatar">
          <IconAvatar />
        </div>
        {isPanelShow && <ProfilePanel isPanelShow={isPanelShow} />}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
