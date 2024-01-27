import React from "react";
import styled from "styled-components";
import Image from "../../assets/doctor.png";
import Logins from "../Logins/Logins";

const BannerWrapper = styled.section`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 5rem);
  margin-top: 1rem;
`;
const BannerTitle = styled.h1`
  width: 20rem;
  font-size: 5rem;
  text-align: left;
  color: var(--clr-dark);
`;

const BannerImage = styled.img`
  width: 30rem;
  justify-self: right;
  object-fit: contain;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <div>
        <BannerTitle>HOSPITAL MANAGEMENT SYSTEM</BannerTitle>
        <Logins />
      </div>
      <BannerImage src={Image} />
    </BannerWrapper>
  );
};

export default Banner;
