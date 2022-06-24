import Header from "./Header";
import styled from "styled-components";

const MyLayout = (props) => {
  return (
    <MyLayoutWrapper>
      <Header />
      {props.children}
    </MyLayoutWrapper>
  );
};

export default MyLayout;

const MyLayoutWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  & #test {
    font-size: 30px;
    @media(max-width: 700px) {
      font-size: 15px;
    }
  }
`;
