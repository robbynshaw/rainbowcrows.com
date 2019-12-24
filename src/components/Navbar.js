import React from 'react'
import styled from 'styled-components'

import logo from '../img/logo.svg'
import { Link } from 'gatsby';

const TitleContainer = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const Title = styled.h1`
  &&& {
    font-family: 'Bodoni 11';
    font-weight: 100;
    font-size: 60px;
    letter-spacing: 2px;
    font-variant: 'small-caps';
    text-align: right;
  }
  padding-right: 10px;
  display: inline-block;
`;

const Logo = styled.img`
  width: 88px;
  margin-right: 40px;
  margin-bottom: -20px;
`;

const Navbar = class extends React.Component {
  render() {
    return (
    <nav>
      <TitleContainer>
        <Link to="/">
          <Logo src={logo} alt='Rainbow Crow' title='Rainbow Crow'></Logo>
          <Title>Rainbow Crows</Title>
        </Link>
      </TitleContainer>
    </nav>
    )
  }
}

export default Navbar
