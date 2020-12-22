import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: 1;
    top: 0;
`;



function Dropdown() {
    return (
        <DropdownContainer>
           <Icon>
               <CloseIcon/>
           </Icon>
           <DropdownWrapper>
               <DropdownMenu>
                   {menuData.map((item,index) => {
                       return (
                           <DropdownLink
                           key={index}
                           to={item.link}
                           >

                           </DropdownLink>
                       )
                   })}
               </DropdownMenu>
           </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
