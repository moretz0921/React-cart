import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg';

function Modal({ currentCart, setCurrentCart }) {
  const { name, likeCount, price } = currentCart;

  const handleClose = () => {
    setCurrentCart(null);
  };

  return (
    <ModalWrap>
      <p>{name}</p>
      <DetailRow>
        <LikeIcon width="20px" height="20px" />
        {likeCount}명이 좋아합니다
      </DetailRow>
      <p>{price} 원</p>

      <div className="button-wrap">
        <button type="button" class="cancel" onClick={handleClose}>
          취소
        </button>
        <button type="button" class="cart">
          장바구니 담기
        </button>
      </div>
    </ModalWrap>
  );
}

export default Modal;

const ModalWrap = styled.div`
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
  padding: 20px;
  border-radius: 8px;
  box-shadow: 8px 8px 12px -1px rgb(0 0 0 / 0.3);

  color: #222;
  background-color: #fff;

  .button-wrap {
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
  }
`;

const DetailRow = styled.div`
  display: flex;
  & > * {
    margin-right: 6px;
  }
`;
