import styled from "styled-components";
const Panel = styled.div`
  width: 240px;
  border-radius: 10px;
  position: fixed;
  top: 70px;
  right: 20px;
  border: 1px solid ${(props) => props.theme.color.primaryBorderColor};
  background-color: ${(props) => props.theme.color.whiteBgColor};
  .top,
  .bottom {
    padding: 10px 0;
    div {
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      &:hover {
        background-color: ${(props) => props.theme.color.oneBgColor};
      }
    }
  }
  .top {
    border-bottom: 1px solid ${(props) => props.theme.color.primaryBorderColor};
  }
`;
export default Panel;
