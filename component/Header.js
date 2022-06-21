import { useRouter } from "next/router";
import styled from "styled-components";

const Header = () => {
  const { push } = useRouter();
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper onClick={() => push("/")}>Home</HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/status")}>
        Status
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/ect")}>Ect</HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/calculator")}>
        Calculator
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/calculator2")}>
        Calculator2
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/restapi")}>
        Restapi
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/fibonacci")}>
        Fibonacci
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/ricknmorty")}>
        Ricknmorty
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/paginatetest")}>
        Paginatetest
      </HeaderLinkWrapper>
      <HeaderLinkWrapper onClick={() => push("/test")}>Test</HeaderLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const HeaderLinkWrapper = styled.a`
  cursor: pointer;
`;
