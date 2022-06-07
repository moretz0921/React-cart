import React from 'react';
import styled from 'styled-components';

import BannerImage from '../../assets/images/banner.png';

function Banner() {
  return (
    <ImgWrap>
      <img src={BannerImage} alt="" />
    </ImgWrap>
  );
}

export default Banner;

const ImgWrap = styled.div`
  max-width: 1050px;
  width: 100%;
  height: 140px;
  margin: 40px auto;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
