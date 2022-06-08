import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InnerContainer from '../components/Layout';
import Tab from '../components/UI/Tab';
import { getProduct } from '../api/getApi';

function Detail() {
  const publicUrl = process.env.PUBLIC_URL;
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const detail = post.detail;

  console.log(post.imgSrc, '이미지');

  useEffect(() => {
    const fetchPostData = async () => {
      const result = await getProduct(id);

      setPost(result);
    };

    fetchPostData();
  }, [id]);

  return (
    <InnerContainer paddingLeft={20} paddingRight={20} paddingBottom={100}>
      <DetailWrap>
        <ImgWrap>
          <img src={`${publicUrl}/${post.imgSrc}`} alt="" />
        </ImgWrap>

        <div>
          <ContentWrap>
            <Title>{post.name}</Title>
            <Desc>{post.desc}</Desc>
          </ContentWrap>
          <PriceWrap>
            <Price>{post.price}원</Price>
          </PriceWrap>
          <DescWrap>
            {detail &&
              detail.map((item, idx) => {
                return (
                  <dl key={idx} className="list">
                    <dt>{item.title}</dt>
                    <dd>{item.content}</dd>
                  </dl>
                );
              })}
          </DescWrap>
        </div>
      </DetailWrap>

      <TabWrap>
        <Tab post={post} />
      </TabWrap>
    </InnerContainer>
  );
}

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  width: 1050px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0 100px 0;
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

const DescWrap = styled.div`
  width: 560px;
  margin-top: 19px;
  padding-bottom: 19px;
  border-top: 1px solid #f4f4f4;

  .list {
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid #f4f4f4;

    dt {
      width: 128px;
      font-size: 14px;
      color: #666;
      line-height: 20px;
    }

    dd {
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
    }
  }
`;

const TabWrap = styled.div``;
