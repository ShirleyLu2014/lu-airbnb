import styled from "styled-components";
const CenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.mixin.radiusClass};
  padding-right: 0;
  cursor: pointer;
  ${(props) => props.theme.mixin.boxshadow};
  color: ${(props) => props.theme.color.oneFontColor};
  div {
    padding: 3px 10px;
  }
  .center {
    border-right: 1px solid ${(props) => props.theme.color.borderPrimaryColor};
    border-left: 1px solid ${(props) => props.theme.color.borderPrimaryColor};
  }
  .right {
    display: flex;
    align-items: center;
    padding-left: 0;
    color: ${(props) => props.theme.color.twoFontColor};
    .icon-search {
      height: 32px;
      height: 32px;
      // box-sizing: border-box;
      border-radius: 50%;
      display: felx;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: ${(props) => props.theme.color.whiteColor};
    }
  }
`;
export default CenterWrapper;
