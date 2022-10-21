import styled from "styled-components";
const RightWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  .btns,
  .profile {
    display: flex;
    align-items: center;
  }
  .btns {
    span {
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .profile {
    margin-left: 20px;
    ${(props) => props.theme.mixin.radiusClass}
    cursor: pointer;
    ${(props) => props.theme.mixin.boxshadow}
    .icon-avatar {
      margin-left: 10px;
    }
  }
`;
export default RightWrapper;
