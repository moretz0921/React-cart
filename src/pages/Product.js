import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import ProductList from '../components/Product/ProductList';
import Pagination from '../components/UI/Pagination';
import InnerContainer from '../components/Layout';
import Search from '../components/Search';

/*
  "category": [
    {
      "categoryId": 1,
      "categoryCode": "TOTAL",
      "categoryName": "전체"
    },
    {
      "categoryId": 2,
      "categoryCode": "POPULAR",
      "categoryName": "인기순"
    },
    {
      "categoryPk": 3,
      "categoryCode": "LOW",
      "categoryName": "낮은가격순"
    },
    {
      "categoryPk": 4,
      "categoryCode": "HIGH",
      "categoryName": "높은가격순"
    }
  ],

*/

function Product({
  productItems,
  cartItems,
  setCartItems,
  currentPage,
  setCurrentPage,
  totalCount,
  pageGroup,
  next,
  prev,
}) {
  const location = useLocation();
  const searchUrl = new URLSearchParams(location.search).get('q');

  if (searchUrl) {
    return <Search />;
  } else {
    return (
      <InnerContainer paddingLeft={20} paddingRight={20} paddingBottom={100}>
        <TitleWrap>
          <h2>이 상품 어때요?</h2>
        </TitleWrap>

        <ProductList
          productItems={productItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
          pageGroup={pageGroup}
          prev={prev}
          next={next}
        />
      </InnerContainer>
    );
  }
}

export default Product;

const TitleWrap = styled.div`
  padding: 50px 0;
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const SearchItem = styled.li`
  flex: 0 0 25%;
  padding-right: 10px;
  cursor: pointer;
  .img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  .desc-wrap {
    padding: 15px 10px;
    h3 {
      margin-bottom: 10px;
      font-size: 14px;
    }
    p {
      font-size: 13px;
      font-weight: bold;
    }
  }

  & img {
    display: block;
    width: 100%;
  }
`;
