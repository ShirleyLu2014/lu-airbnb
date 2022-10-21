import styled from "styled-components";
const LeftWrapper = styled.div`
  padding-left: 25px;
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--primary-color);
  // color: ${(props) => props.theme.color.primaryColor};
  .logo {
    cursor: pointer;
  }
`;
export default LeftWrapper;
