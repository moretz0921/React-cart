import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollTop from '../assets/images/btn-scroll-top.svg';
import InnerContainer from './Layout';

function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const [btnState, setBtnState] = useState(false);

  const handleOffsetTop = () => {
    setScrollY(window.pageYOffset);

    if (scrollY > 300) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };

  const handleBtnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setScrollY(0);
    setBtnState(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOffsetTop);
    return () => {
      window.removeEventListener('scroll', handleOffsetTop);
    };
  }, [scrollY]);

  return (
    <Wrap>
      <InnerContainer paddingLeft={25} paddingRight={25}>
        <DescWrap className="mobile-desc">
          <CompanyName>주식회사 컬리</CompanyName>
          <CompanyDesc>
            대표 김슬아 | 사업자등록번호 : 261-81-23567 <br />
            통신판매업 : 제 2018-서울강남-01646호 <br />
          </CompanyDesc>
          <Tel>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</Tel>
          <Contact>Contact: business@kurlycorp.com</Contact>
        </DescWrap>

        <ScrollWrap
          className={btnState ? 'topBtn active' : 'topBtn'}
          onClick={handleBtnTop}
        >
          <img src={ScrollTop} alt="스크롤 탑 버튼" />
        </ScrollWrap>
      </InnerContainer>
    </Wrap>
  );
}

export default Footer;

const Wrap = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #f7f7f7;
`;

const DescWrap = styled.div`
  font-style: normal;
`;

const CompanyName = styled.h3`
  margin-bottom: 5px;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -1px;
  color: #979797;
`;

const CompanyDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #979797;
`;

const Tel = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #979797;
`;

const Contact = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #979797;
`;

const ScrollWrap = styled.button`
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 3000;
  cursor: pointer;

  &.topBtn {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 300ms, opacity 300ms;

    &.active {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 0.8s ease-in-out;
    }
  }
`;
