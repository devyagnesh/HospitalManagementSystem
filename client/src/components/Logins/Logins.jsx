import React from "react";
import styled from "styled-components";
import Wrapper from "../../Layouts/Wrapper";
import { Link } from "react-router-dom";

const LoginsSectionContentWrapper = styled.div`
  min-height: inherit;
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  gap:.5rem;

  & > a {
    color: var(--clr-dark);
    background-color: var(--clr-gray);
    padding: 0.5rem;
    text-align: center;
    border-radius: 0.2rem;
  }

  & > a:hover {
    background-color: var(--clr-dark);
    color: var(--clr-gray);
    transition: 0.1s ease;
  }
`;

const Logins = () => {
  return (
    <LoginsSectionContentWrapper>
      <Link>Patient Login</Link>
      <Link>Doctor Login</Link>
      <Link>Admin Login</Link>
    </LoginsSectionContentWrapper>
  );
};

export default Logins;
