import React from 'react';
import styled from 'styled-components';
import InnerWrap from '../components/Layout';
import HeartIcon from '../assets/images/mypage-like.svg';

function MyPage() {
  return (
    <InnerWrap
      paddingLeft={20}
      paddingRight={20}
      paddingTop={100}
      paddingBottom={100}
    >
      <MyPageWrap>
        <TitleWrap>
          <h2>찜한 상품(0)</h2>
          <p>찜한 상품은 최대 200개까지 저장됩니다.</p>
        </TitleWrap>

        <ContentWrap>
          <div className="img-wrap">
            <img src={HeartIcon} alt="" />
          </div>
          <p>찜한 상품이 없습니다.</p>

          <a href="" className="product-btn">
            상품 보기
          </a>
        </ContentWrap>
      </MyPageWrap>
    </InnerWrap>
  );
}

export default MyPage;

const MyPageWrap = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 34px;
  border-bottom: 2px solid #333;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #333;
    letter-spacing: -0.5px;
  }

  p {
    padding-left: 11px;
    font-size: 14px;
    color: #999;
    line-height: 20px;
    letter-spacing: -0.3px;
    vertical-align: 3px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 557px;
  padding-bottom: 14px;
  line-height: 20px;

  .img-wrap {
    width: 60px;
    height: 60px;

    & img {
      width: 100%;
    }
  }

  p {
    margin: 16px 0 20px;
    color: #b5b5b5;
    font-size: 16px;
    letter-spacing: -0.3px;
  }

  .product-btn {
    width: 150px;
    height: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(95, 0, 128);
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 3px;
  }
`;
