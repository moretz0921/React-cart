import React from 'react';
import styled from 'styled-components';

function Filter({ setOrder, setAscending }) {
  const handleLatestClick = (e) => {
    e.preventDefault();
    setOrder('createdAt');
  };

  const handlePopularClick = (e) => {
    e.preventDefault();
    setOrder('likeCount');
  };

  const handleLowPriceClick = (e) => {
    e.preventDefault();
    setOrder('price');
    setAscending('asc');
  };

  const handleHighPriceClick = (e) => {
    e.preventDefault();
    setOrder('price');
    setAscending('desc');
  };

  return (
    <FilterWrap>
      <FilterItem>
        <a onClick={handleLatestClick}>최신순</a>
      </FilterItem>
      <FilterItem>
        <a onClick={handlePopularClick}>인기순</a>
      </FilterItem>
      <FilterItem>
        <a onClick={handleLowPriceClick}>낮은 가격순</a>
      </FilterItem>
      <FilterItem>
        <a onClick={handleHighPriceClick}>높은 가격순</a>
      </FilterItem>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const FilterItem = styled.li`
  position: relative;
  padding: 0 10px;
  &:last-child {
    &::after {
      display: none;
    }
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 6px;
    width: 1px;
    height: 10px;
    background-color: #e5e5e5;
  }
  > a {
    font-size: 12px;
    color: #999;
    line-height: 18px;
    letter-spacing: -0.3px;
    cursor: pointer;
  }
`;
