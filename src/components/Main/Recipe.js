import React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function Recipe({ productItems }) {
  console.log(productItems, 'product');
  return (
    <InnerWrap>
      <Title>이 상품 어때요?</Title>
      <StyledSlider {...settings}>
        {productItems.map((item, idx) => {
          return (
            <SliderItem key={item.id}>
              <div className="img-wrap">
                <img src={item.imgSrc} alt="" />
              </div>
            </SliderItem>
          );
        })}
      </StyledSlider>
    </InnerWrap>
  );
}

export default Recipe;

const InnerWrap = styled.div`
  padding: 100px 0 50px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: rgb(51, 51, 51);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 600;
  text-align: center;
`;

const StyledSlider = styled(ReactSlider)`
  .slick-slider {
    max-width: 1050px;
    width: 1050px;
    margin: 0 auto;
  }
  .slick-list {
    max-width: 1050px;
    margin: 0 auto;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    width: 250px;
    height: 320px;
  }

  .slick-slide div {
    cursor: pointer;
    outline: none;
  }

  .slick-prev {
    left: calc(50% - 500px);
    background-color: #fff;

    &::before {
      display: none;
    }
  }

  .slick-next {
    right: calc(50% - 500px);
    background-color: #fff;

    &::before {
      display: none;
    }
  }
`;

const SliderItem = styled.div`
  .img-wrap {
    overflow: hidden;
    width: 250px;
    height: 320px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
const ArrowButton = styled.button`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipe: true,
  draggable: true,
  centerPadding: '0px',
  prevArrow: (
    <ArrowButton className="slick-prev">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton className="slick-next">
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};
