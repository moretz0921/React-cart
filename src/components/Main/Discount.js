import React, { useState } from 'react';
import styled from 'styled-components';
import DisCountImg from '../../assets/images/discount.jpg';
import { useInterval } from '../../hooks/useInterval';
import theme from '../../styles/theme';

function Discount() {
  let dday = new Date('June 09, 2022, 24:00:00').getTime();
  const [currentHour, setCurrentHour] = useState(Number);
  const [currentMin, setCurrentMin] = useState(Number);
  const [currentSec, setCurrentSec] = useState(Number);

  useInterval(() => {
    let today = new Date().getTime();
    let gap = dday - today;
    let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.ceil((gap % (1000 * 60)) / 1000);

    setCurrentHour(hour);
    setCurrentMin(min);
    setCurrentSec(sec);
  }, 1000);

  return (
    <DisCountWrap>
      <div className="title-wrap">
        <h2>일일특가</h2>
        <p>24시간 한정 특가</p>

        <div className="time">
          {currentHour}:{currentMin}:{currentSec}
        </div>
      </div>

      <ContentWrap>
        <div className="img-wrap">
          <img src={DisCountImg} alt="" />
        </div>

        <div className="desc">
          <p>매일 간편하게 즐기는 5가지 견과류</p>
          <h3>[닥터넛츠] 오리지널뉴 견과 280g</h3>
        </div>

        <div className="price-wrap">
          <div className="bold">35%</div>
          <div className="discount">6,305원</div>
          <div className="price">9,700원</div>
        </div>
      </ContentWrap>
    </DisCountWrap>
  );
}

export default Discount;

const DisCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1050px;
  margin: 0 auto;
  padding: 100px 20px;

  .title-wrap {
    h2 {
      font-size: 28px;
      color: rgb(51, 51, 51);
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: -0.26px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: rgb(153, 153, 153);
      font-weight: normal;
      line-height: 1.3;
      letter-spacing: normal;
      margin-bottom: 24px;
    }

    .time {
      font-size: 32px;
      font-weight: 800;
    }
  }

  @media ${theme.device.mobile} {
    flex-direction: column;
    padding: 50px 10px;

  .title-wrap {
    margin-bottom: 30px;
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    .time {
      font-size: 24px;
   
    }
  }

  @media ${theme.device.iphone} {
  }
`;

const ContentWrap = styled.div`
  .img-wrap {
    overflow: hidden;
    height: 347px;
    margin-bottom: 10px;

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

  .desc {
    p {
      padding-bottom: 8px;
      font-size: 14px;
      color: rgb(153, 153, 153);
      line-height: 1.38;
    }

    h3 {
      padding-bottom: 8px;
      font-size: 16px;
      line-height: 1.45;
      color: rgb(51, 51, 51);
      font-weight: 600;
    }
  }

  .price-wrap {
    display: flex;
    align-items: center;

    .bold {
      margin-right: 6px;
      color: rgb(250, 98, 47);
      font-size: 20px;
      font-weight: 800;
      line-height: 1.5;
      white-space: nowrap;
    }

    .discount {
      color: rgb(51, 51, 51);
      font-size: 20px;
      font-weight: 800;
      line-height: 1.5;
      white-space: nowrap;
    }
    .price {
      margin-left: 10px;
      color: rgb(153, 153, 153);
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      text-decoration: line-through;
    }
  }

  @media ${theme.device.mobile} {
  }

  @media ${theme.device.iphone} {
  }
`;
