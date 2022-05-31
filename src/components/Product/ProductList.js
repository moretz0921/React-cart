import React from 'react';
import styled from 'styled-components';
import CartIcon from '../../assets/images/product_cart.svg';
import theme from '../../styles/theme';

function ProductList({ productItems, setCartItems, cartItems }) {
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

  return (
    <Product>
      {productItems.map(({ id, name, imgSrc, price }, idx) => {
        return (
          <ProductItem key={id} onClick={() => handleAddProduct(idx)}>
            <div className="img-wrap">
              <img src={imgSrc} alt="" />

              <div className="cart-icon">
                <img src={CartIcon} />
              </div>
            </div>

            <div className="desc-wrap">
              <h3>{name}</h3>
              <p>{price.toLocaleString()}원</p>
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
