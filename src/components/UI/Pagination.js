import React from 'react';
import styled from 'styled-components';

import PrevImg from '../../assets/images/prev.svg';
import NextImg from '../../assets/images/next.svg';

function Pagination({
  currentPage,
  setCurrentPage,
  totalPage,
  firstNumber,
  lastNumber,
  prev,
  next,
}) {
  const handleNumber = () => {
    let arr = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
      arr.push(
        <li key={i} onClick={() => handleNumberClick(i)}>
          <a className={currentPage === i ? 'active' : ''}>{i}</a>
        </li>
      );
    }

    return arr;
  };

  const handleNumberClick = (idx) => {
    setCurrentPage(idx);
  };

  const handlePrevClick = () => {
    setCurrentPage(prev);
  };

  const handleNextClick = () => {
    setCurrentPage(next);
  };

  return (
    <>
      <InnerWrap>
        {prev > 0 && (
          <Prev onClick={handlePrevClick}>
            <img src={PrevImg} alt="" />
          </Prev>
        )}
        <PageWrap>{handleNumber()}</PageWrap>
        {lastNumber < totalPage ? (
          <Next onClick={handleNextClick}>
            <img src={NextImg} alt="" />
          </Next>
        ) : (
          ''
        )}
      </InnerWrap>
    </>
  );
}

export default Pagination;

const InnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Prev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #ddd;
  border-right: 0;

  & img {
    width: 15px;
  }
`;

const Next = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #ddd;
  border-left: 0;

  & img {
    width: 15px;
  }
`;

const PageWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid #ddd;
      font-weight: 700;
      font-size: 12px;
      color: #333;
      cursor: pointer;

      &.active {
        background-color: #f7f7f7;
        color: #5f0080;
      }
    }
  }
`;
