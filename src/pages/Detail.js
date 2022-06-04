import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InnerContainer from '../components/Layout';
import { getProduct } from '../api/getApi';

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  console.log(post.imgSrc);

  useEffect(() => {
    const fetchPostData = async () => {
      const result = await getProduct(id);

      setPost(result);
    };

    fetchPostData();
  }, [id]);

  return (
    <InnerContainer paddingLeft={20} paddingRight={20}>
      <DetailWrap>
        <ImgWrap>
          <img src={`http://localhost:3000/${post.imgSrc}`} alt="" />
        </ImgWrap>

        <div>
          <ContentWrap>
            <Title>{post.name}</Title>
            <Desc>{post.desc}</Desc>
          </ContentWrap>
          <PriceWrap>
            <Price>{post.price}원</Price>
          </PriceWrap>
        </div>
      </DetailWrap>
    </InnerContainer>
  );
}

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  width: 1050px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0;
  box-sizing: border-box;
`;

const ImgWrap = styled.div`
  width: 430px;
  height: 552px;
  margin-right: 50px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ContentWrap = styled.div`
  margin-bottom: 30px;
  padding-top: 20px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  word-break: break-all;
`;

const Desc = styled.p`
  padding-top: 4px;
  font-size: 14px;
  color: #999;
  line-height: 20px;
`;

const PriceWrap = styled.div``;

const Price = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
`;
