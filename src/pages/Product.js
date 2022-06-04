import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/Product/ProductList';
import Pagination from '../components/UI/Pagination';
import InnerContainer from '../components/Layout';

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

export default Product;

const TitleWrap = styled.div`
  padding: 50px 0;
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;
