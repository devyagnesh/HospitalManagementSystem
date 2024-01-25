import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
`;

const Wrapper = (props) => {
  return <Main className={props.className}>{ props.children }</Main>;
};

export default Wrapper;
