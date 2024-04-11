import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaMusic, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`

  padding: 10px;
  gap: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`;

const FooterIcon = styled.div`
  font-size: 24px;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/Card">
        <FooterIcon>
          <FaHome />
        </FooterIcon>
      </Link>
      <Link to="/Message"> {/* Adjust the Link to point to "/Message" */}
        <FooterIcon>
          <FaEnvelope />
        </FooterIcon>
      </Link>
      <Link to="/Player">
        <FooterIcon>
          <FaMusic />
        </FooterIcon>
      </Link>
      <Link to="/Contact">
        <FooterIcon>
          <FaUser />
        </FooterIcon>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
