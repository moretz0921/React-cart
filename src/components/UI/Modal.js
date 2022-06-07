import React from 'react';
import styled from 'styled-components';

const MIN_COUNT = 1;
const MAX_COUNT = 1000;

function Modal({
  currentCart,
  setCurrentCart,
  currentCount,
  setCurrentItemCount,
  cartItems,
  setCartItems,
}) {
  const { name, price } = currentCart;

  const checkedCartItem = cartItems.find(
    (item) => item.name === currentCart.name
  );

  const handleClose = () => {
    setCurrentCart(null);
  };

  const handleAddProduct = () => {
    if (typeof checkedCartItem == 'undefined') {
      setCartItems((prevItem) => {
        return [...prevItem, currentCart];
      });
    } else {
      const checkedCurrentItem = cartItems.find(
        (item) => item === checkedCartItem
      );
      // 장바구니에 저장되어 있는 카운트를 올려야지!!
      const newCartItems = [...cartItems];
      checkedCurrentItem.count += 1;
      setCartItems(newCartItems);
    }

    setCurrentCart(null);
  };

  const handleIncreaseBtn = () => {
    if (currentCount < MAX_COUNT) {
      setCurrentItemCount((currentCount += 1));
    } else {
      alert('장바구니에 담을 수 있는 최대 수량은 1000개입니다.');
    }
  };

  const handleDecreaseBtn = () => {
    if (currentCount > MIN_COUNT) {
      setCurrentItemCount((currentCount -= 1));
    } else {
      alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
    }
  };

  return (
    <ModalWrap>
      <ModalTop>
        <ProductWrap>
          <span className="name">{name}</span>
          <span className="price">{price}원</span>
        </ProductWrap>
        <Check>
          <div className="increase">
            <button className="decrease-btn" onClick={handleDecreaseBtn}>
              -
            </button>
            <div className="count">{currentCount}</div>
            <button className="increase-btn" onClick={handleIncreaseBtn}>
              +
            </button>
          </div>
        </Check>
      </ModalTop>

      <ContentWrap>
        <PriceWrap>
          <p className="total">합계</p>
          <p className="price">
            <span>{(price * currentCount).toLocaleString()}</span>원
          </p>
        </PriceWrap>

        <ButtonWrap>
          <button type="button" class="cancel" onClick={handleClose}>
            취소
          </button>
          <button type="button" class="cart" onClick={handleAddProduct}>
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

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const ProductWrap = styled.div`
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

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  .increase {
    display: flex;
    align-items: center;
    .decrease-btn {
      margin-right: 10px;
      margin-bottom: 2px;
      font-size: 28px;
    }
    .increase-btn {
      margin-left: 10px;
      font-size: 20px;
    }
    .count {
      font-size: 14px;
      color: #000;
      line-height: 18px;
      text-align: center;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
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
