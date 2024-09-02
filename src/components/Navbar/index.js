import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, SocialMediaButtons, MobileLink } from './NavbarStyledComponent'

import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import nexlogo from '../../images/nexlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <img src={nexlogo} alt="hi" className='w-[45px] h-[45px]'/>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href='#products'>Products</NavLink>
          <NavLink href='#services'>Services</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
          <SocialMediaButtons href="https://www.linkedin.com/company/nexzap/about/?viewAsMember=true" target="_blank"><LinkedInIcon/></SocialMediaButtons>
        </NavItems>
        {/* <ButtonContainer>
          
        </ButtonContainer> */}
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#home" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#products' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#services' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <SocialMediaButtons style={{ marginLeft:'-9px',color: 'white', width: 'max-content',fontWeight: '500',fontSize:'16px' }} href="https://www.linkedin.com/company/nexzap/about/?viewAsMember=true" target="_blank">LinkedIn</SocialMediaButtons>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
