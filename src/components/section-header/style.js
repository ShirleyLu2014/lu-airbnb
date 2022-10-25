import styled from "styled-components";
const HeaderWrapper = styled.div`
  .title {
    font-size: ${(props) => props.theme.size.titleSize};
    color: ${(props) => props.theme.color.oneFontColor};
    font-weight: 400;
  }
  .subtitle {
    font-size: ${(props) => props.theme.size.subTitleSize};
    color: ${(props) => props.theme.color.oneFontColor};
    margin-top: 10px;
  }
`;
export default HeaderWrapper;
