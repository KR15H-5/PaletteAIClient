import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Color Palette Extractor</h1>
    </HeaderContainer>
  );
};

export default Header;
