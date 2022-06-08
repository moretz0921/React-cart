import React, { useState } from 'react';
import styled from 'styled-components';

function Tab({ post }) {
  const publicUrl = process.env.PUBLIC_URL;
  const tabContent = [
    {
      title: '상품설명',
      content:
        '바쁜 약속과 일정들로 가득 찬 평일, 클렌즈를 결심하기 어려우셨죠.주말만은 온전히 당신을 위한 시간을 가져보세요.주말 이틀 동안만 진행하시는 것을 감안해 강력한 클렌즈 프로그램으로 구성했습니다.전국 각지에서 엄선한 재료만을 넣어 영양소 파괴 없이 정성껏 짜낸 콜드 프레스 주스, 콜린스 그린을 만나보세요! ',
    },
    { title: '상세정보', content: '1' },
    { title: '후기', content: '2' },
    { title: '문의', content: '3' },
  ];

  const postTab = post.tab;

  console.log(postTab, 'ㅇㅇ');

  const [activeIndex, setActiveIndex] = useState(0);
  const handleChangeTab = (currentIndex) => {
    console.log('탭', currentIndex);
    setActiveIndex(currentIndex);
  };

  return (
    <TabWrap>
      <TabList>
        {postTab &&
          postTab.map((item, idx) => {
            return (
              <TabItem key={idx}>
                <a
                  onClick={() => handleChangeTab(idx)}
                  className={`${activeIndex === idx ? 'active' : ''}`}
                >
                  {item.title}
                </a>
              </TabItem>
            );
          })}
      </TabList>
      <ContentList>
        <ContentWrap>
          {postTab &&
            postTab.map((item, idx) => {
              return (
                <ContentItem
                  key={idx}
                  className={`${
                    activeIndex === idx ? 'active' : 'description'
                  }`}
                >
                  {activeIndex === idx ? (
                    <img src={`${publicUrl}/${item.imgSrc}`} alt="" />
                  ) : (
                    item.content
                  )}
                </ContentItem>
              );
            })}
        </ContentWrap>
      </ContentList>
    </TabWrap>
  );
}

export default Tab;

const TabWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const TabList = styled.ul`
  display: flex;
`;
const TabItem = styled.li`
  flex: 1 0 0;

  &:first-child {
    a {
      border-left: #eee;
      &.active {
        border-left: #eee;
      }
    }
  }

  a {
    line-height: 59px;
    text-align: center;
    display: block;
    color: #666;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.3px;
    font-family: noto sans;
    background-color: #fafafa;
    border: 1px solid #eee;
    border-left: none;
    cursor: pointer;

    &.active {
      background-color: #fff;
      color: #5f0080;
      border-bottom: 0;
    }
  }
`;

const ContentList = styled.div``;

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const ContentItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding-top: 50px;

  > img {
    width: 100%;
    height: 100%;
  }

  &.description {
    display: none;
  }
  &.active {
    display: block;
  }
`;
