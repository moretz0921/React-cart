import React from 'react';
import styled from 'styled-components';

const MIN_COUNT = 1;
const MAX_COUNT = 1000;

type CartListProps = {
  cartItems?: any;
  setCartItems?: any;
};

type ItemType = {
  id: any;
  name: string;
  imgSrc: string;
  price: number;
  count: number;
};

function CartList({ cartItems, setCartItems }: CartListProps) {
  const increaseCartItem = (idx: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[idx].count < MAX_COUNT) {
      newCartItems[idx].count += 1;
      setCartItems(newCartItems);
    } else {
      alert('장바구니에 담을 수 있는 최대 수량은 1000개입니다.');
    }
  };

  const decreaseCartItem = (idx: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[idx].count > MIN_COUNT) {
      newCartItems[idx].count -= 1;
      setCartItems(newCartItems);
    } else {
      alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
    }
  };

  const deleteCartItem = (idx: number) => {
    const newCartItem = [...cartItems];
    newCartItem.splice(idx, 1);
    setCartItems(newCartItem);
  };

  return (
    <CartLists>
      {cartItems.map(
        ({ id, name, imgSrc, price, count }: ItemType, idx: number) => {
          return (
            <CartItem key={id}>
              <div className="img-wrap">
                <img src={imgSrc} alt="" />
              </div>
              <div className="wrap">
                <div className="desc-wrap">
                  <h3>{name}</h3>
                  <p>{(price * count).toLocaleString()}원</p>
                </div>

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
                  <button type="button">
                    <p
                      className="remove-btn"
                      onClick={() => deleteCartItem(idx)}
                    >
                      삭제하기
                    </p>
                  </button>
                </Check>
              </div>
            </CartItem>
          );
        },
      )}
    </CartLists>
  );
}

export default CartList;

const CartLists = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  &::last-child {
    margin-bottom: 0;
  }
  .img-wrap {
    overflow: hidden;
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
    margin-right: 15px;
    background-color: #ededed;
    & img {
      width: 100%;
    }
  }
  .wrap {
    flex: 1 0 0;
    .desc-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      font-size: 13px;
      > h3 {
        margin-right: 10px;
      }
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
