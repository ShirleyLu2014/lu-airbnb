import styled from "styled-components";
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid var(--primary-border-color);
  font-size: ${(props) => props.theme.size.oneFontSize};
`;
export default HeaderWrapper;
