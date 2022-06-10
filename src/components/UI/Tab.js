import React, { useState } from 'react';
import styled from 'styled-components';

function Tab({ post }) {
  const publicUrl = process.env.PUBLIC_URL;

  const postTab = post.tab;

  const [activeIndex, setActiveIndex] = useState(0);
  const handleChangeTab = (currentIndex) => {
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
