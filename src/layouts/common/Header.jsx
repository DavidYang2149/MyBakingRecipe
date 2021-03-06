import styled from '@emotion/styled';

const Header = styled.nav`
display: flex;
justify-content: space-between;
background: #fff;
align-items: center;
/* opacity: 0.5; */
padding: 10px;
/* border: 1px solid #b1a0a0; */
`;

const HeaderTitle = styled.h1`
  color: #1f2a37;
  font-size: 2rem;
  font-weight: 800;
  font-family: sans-serif;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderUser = styled.p`
  font-weight: 700;
`;

const HeaderButton = styled.button`
  color: #361d74;
  padding: 5px 7px;
  font-size: 1.025rem;
  font-weight: 600;
  background: transparent;
  border-radius: 6px;
  border-color: #361d74;
  cursor: pointer;
`;

export {
  Header,
  HeaderTitle,
  HeaderUser,
  HeaderButton,
};
