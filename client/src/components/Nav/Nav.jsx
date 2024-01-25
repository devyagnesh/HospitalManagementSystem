import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'


const Navigation = styled.nav`
  height:5rem;
  width:100%;
  max-width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;

  &>a{
    padding:.5rem 1rem;
    color:var(--clr-dark);
    border:.1rem solid var(--clr-green);
    border-radius:.2rem;
    transition:background .2s ease;
  }

  &>a:hover{
    background-color:var(--clr-green);
    border-color:var(--clr-green);
    color:var(--clr-white);
  }
`;

const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:2rem;

  &>li>a{
    color:var(--clr-dark);
    font-size:16px;
  }
`


const Nav = () => {
  return (
    <Navigation>
      <NavMenu>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>
          <Link>Logins</Link>
        </li>
      </NavMenu>

      <Link to={'/'}>Book appointment</Link>
    </Navigation>
  );
};

export default Nav;
