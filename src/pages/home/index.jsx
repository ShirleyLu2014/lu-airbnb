import React, { memo, useEffect } from "react";
import luRequest from "@/services"
const Home = memo(() => {
  // 发送网络请求
  useEffect(() => {
    luRequest.get({url: "/home/highscore"}).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Home</div>;
});

export default Home;
