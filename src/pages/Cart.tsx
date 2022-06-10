import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartList from '../components/Cart/CartList';
import InnerContainer from '../components/Layout';

type CartProps = {
  cartItems?: any,
  setCartItems?: any,
};

function Cart({ cartItems, setCartItems }: CartProps) {
  const saveToLocalStorage = () => {
    localStorage.setItem('cartState', JSON.stringify(cartItems));
  };

  useEffect(() => {
    saveToLocalStorage();
  }, []);

  return (
    <InnerContainer paddingLeft={20} paddingRight={20}>
      <CartWrap>
        <div>
          <h2>장바구니</h2>
          <CartList cartItems={cartItems} setCartItems={setCartItems} />
        </div>
        <div className="pay-wrap">
          <PayWrap>
            <p>결제금액</p>
            <p className="font-bold" id="total-count">
              {cartItems
                .reduce((acc: any, cur: any) => cur.price * cur.count + acc, 0)
                .toLocaleString() + '원'}
            </p>
          </PayWrap>
          <Pay onClick={saveToLocalStorage}>결제하기</Pay>
          <Continue>
            <p>
              또는
              <button type="button">
                <Link to="/product">쇼핑 계속하기</Link>
              </button>
            </p>
          </Continue>
        </div>
      </CartWrap>
    </InnerContainer>
  );
}

export default Cart;

const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;

  h2 {
    padding: 50px 0;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  .pay-wrap {
    width: 300px;
    margin: 0 auto;
  }
`;

const PayWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: bold;
`;

const Pay = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  font-weight: bold;
  background-color: #5f0080;
  cursor: pointer;
`;

const Continue = styled.div`
  color: #63c1f7;
  text-align: center;
  font-size: 12px;
  button {
    font-size: 12px;
    color: #5f0080;
    font-weight: bold;
  }
`;
