import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CartIcon from '../../assets/images/product_cart.svg';
import theme from '../../styles/theme';

import Modal from '../UI/Modal';

function ProductList({ productItems, setCartItems, cartItems }) {
  const [currentCart, setCurrentCart] = useState(null);
  const navigate = useNavigate();

  const handleDetailPage = (currentIdx) => {
    navigate(`/detail/${currentIdx}`);
  };

  const handleClose = () => {
    setCurrentCart(null);
  };

  // 카트에 넣기
  const handleAddProduct = (idx) => {
    const currentProduct = productItems[idx];
    const checkedIdx = cartItems.findIndex(
      (item) => item.id === currentProduct.id
    );

    if (checkedIdx === -1) {
      setCartItems((prev) => {
        return [...prev, { ...currentProduct, count: 1 }];
      });
    } else {
      const newCartItems = [...cartItems];
      newCartItems[idx].count += 1;
      setCartItems(newCartItems);
    }
  };

  /* onClick={() => handleAddProduct(idx)}  id, name, imgSrc, price */

  return (
    <Product>
      {currentCart && <Backdrop onClick={handleClose}></Backdrop>}

      {currentCart && (
        <Modal currentCart={currentCart} setCurrentCart={setCurrentCart} />
      )}
      {productItems.map((item, idx) => {
        return (
          <ProductItem key={item.id}>
            <div className="img-wrap">
              <img
                src={item.imgSrc}
                alt=""
                onClick={() => handleDetailPage(item.id)}
              />

              <div className="cart-icon" onClick={() => setCurrentCart(item)}>
                <img src={CartIcon} />
              </div>
            </div>

            <div className="desc-wrap">
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()}원</p>
            </div>
          </ProductItem>
        );
      })}
    </Product>
  );
}

export default ProductList;

const Product = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-bottom: 60px;
`;

const ProductItem = styled.li`
  flex: 0 0 25%;
  padding-right: 10px;
  cursor: pointer;
  .img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    .cart-icon {
      position: absolute;
      right: 10px;
      bottom: 10px;
      z-index: 100;
      width: 45px;
      height: 45px;
      > img {
        width: 100%;
      }
    }
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

  @media ${theme.device.mobile} {
    flex: 0 0 50%;
  }

  @media ${theme.device.iphone} {
    flex: 0 0 100%;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
`;
