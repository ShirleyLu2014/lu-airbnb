import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux"
import HomeBanner from "./c-cpns/home-banner";
import HomeWrapper from "./style"
import { fetchHomeDataAction } from "@/store/modules/home"
const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return <HomeWrapper>
    <HomeBanner />
  </HomeWrapper>;
});

export default Home;
