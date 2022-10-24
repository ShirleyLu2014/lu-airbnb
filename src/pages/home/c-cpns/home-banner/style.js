import styled from "styled-components"
import bannerImg from "@/assets/img/header-banner.jpeg"
const BannerWrapper = styled.div`
    height: 529px;
    // background: url(${bannerImg}) center/cover;
    background: url(${require("@/assets/img/header-banner.jpeg")}) center/cover; 
`; 
export default BannerWrapper;