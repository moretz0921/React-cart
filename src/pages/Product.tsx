import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import ProductList from '../components/Product/ProductList';
import Pagination from '../components/UI/Pagination';
import InnerContainer from '../components/Layout';
import Search from '../components/Search';
import Filter from '../components/UI/Filter';


type ProductProps = {
  tatalProduct?: any,
  productItems?: any,
  cartItems?: any,
  currentPage?: number,
  setCartItems?: any,
  setCurrentPage: (param: number) => void,
  totalPage?: number,
  firstNumber?: number,
  lastNumber?: number,
  next?: number,
  prev?: number,
  setOrder: (param: string) => void,
  setAscending: (param: string) => void,
};

function Product({
  tatalProduct,
  productItems,
  cartItems,
  currentPage,
  setCartItems,
  setCurrentPage,
  totalPage,
  firstNumber,
  lastNumber,
  next,
  prev,
  setOrder,
  setAscending,
}: ProductProps) {
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

        <TotalWrap>
          <span>총{tatalProduct.length}개</span>
          <Filter setOrder={setOrder} setAscending={setAscending} />
        </TotalWrap>

        <ProductList
          productItems={productItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          firstNumber={firstNumber}
          lastNumber={lastNumber}
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

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 15px;
  span {
    font-size: 12px;
    color: #333;
    line-height: 18px;
  }
`;
