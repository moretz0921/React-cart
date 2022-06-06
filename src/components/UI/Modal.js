import React from 'react';
import styled from 'styled-components';

function Modal({ currentCart, setCurrentCart }) {
  const { name, price } = currentCart;

  const handleClose = () => {
    setCurrentCart(null);
  };

  const increaseCartItem = (idx) => {};

  const decreaseCartItem = (idx) => {};

  return (
    <ModalWrap>
      <ProductWrap>
        <span className="name">{name}</span>
        <span className="price">{price}원</span>
      </ProductWrap>

      <ContentWrap>
        <PriceWrap>
          <p className="total">합계</p>
          <p className="price">
            <span>{price}</span>원
          </p>
        </PriceWrap>

        <ButtonWrap>
          <button type="button" class="cancel" onClick={handleClose}>
            취소
          </button>
          <button type="button" class="cart">
            장바구니 담기
          </button>
        </ButtonWrap>
      </ContentWrap>
    </ModalWrap>
  );
}

export default Modal;

const ModalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  display: flex;

  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  max-width: 100%;
  max-height: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 8px 8px 12px -1px rgb(0 0 0 / 0.3);

  color: #222;
  background-color: #fff;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;

const ProductWrap = styled.div`
  padding-top: 20px;
  font-size: 14px;

  span {
    display: block;

    &.name {
      letter-spacing: 0;
    }

    &.price {
      margin-top: 8px;
      font-weight: bold;
    }
  }
`;

const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  .total {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.67px;
    vertical-align: 0;
  }

  .price {
    font-weight: bold;
    span {
      font-size: 24px;
      line-height: 24px;
      letter-spacing: -1px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  button {
    flex: 1 0 50%;
    height: 56px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;

    &.cancel {
      margin-right: 8px;
      border: 1px solid #ddd;
      color: #333;
      background-color: #fff;
    }

    &.cart {
      border: 1px solid #5f0081;
      color: #fff;
      background-color: #5f0081;
    }
  }
`;

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  .increase {
    display: flex;
    align-items: center;
    .decrease-btn {
      margin-right: 10px;
    }
    .increase-btn {
      margin-left: 10px;
    }
    .count {
      font-size: 12px;
      font-weight: bold;
    }
  }
  .remove-btn {
    color: #42a7f5;
    font-size: 12px;
    font-weight: bold;
  }
`;

/*
  <Check>
    <div className="increase">
      <button
        className="decrease-btn"
        onClick={() => decreaseCartItem(idx)}
      >
        -
      </button>
      <div className="count">{count}</div>
      <button
        className="increase-btn"
        onClick={() => increaseCartItem(idx)}
      >
        +
      </button>
    </div>
  </Check>

*/
