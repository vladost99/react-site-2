import React from 'react';
import styled, { css } from 'styled-components';
import  { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import bars from '../images/bars.svg';
//import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
    height: 60px;
    //background:  red;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
    ${NavLink}
`;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${bars});
        background-size: contain; 
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;



const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn  = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

function Navbar({toggle}) {
    return (
       <Nav>
           <Logo to='/'>ELIXR</Logo>
           <MenuBars onClick={toggle}/>
           <NavMenu>
                {menuData.map((item, index) => {
                   return (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                   )
                })}
           </NavMenu>
          <NavBtn>
              <Button
               to='/contact'
               primary='true'
              >
                  Contact Us
              </Button>
          </NavBtn>
       </Nav>
    )
}

export default Navbar;
