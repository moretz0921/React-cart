import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from 'assets/images/logo.png';
import '../firebase';
import { signOut, getAuth } from 'firebase/auth';
import theme from 'styles/theme';

import CartImg from 'assets/images/cart.svg';
import AddressImg from 'assets/images/adress.svg';
import SearchInput from './UI/SearchInput';

type HeaderProps = {
  cartItems?: any;
};

function Header({ cartItems }: HeaderProps) {
  const { user } = useSelector((state: any) => state);

  const handleLogout = useCallback(async () => {
    await signOut(getAuth());
  }, []);

  return (
    <HeaderWrap>
      <div className="logo-wrap">
        <h1>
          <Link to="/">
            <img src={Logo} alt="로고" />
          </Link>
        </h1>

        <nav className="left">
          <ListWrap>
            <ListItem>
              <Link to="/product">상품</Link>
            </ListItem>
          </ListWrap>
        </nav>
      </div>

      <div className="search-wrap">
        <SearchInput />
        <nav className="right">
          {user.currentUser ? (
            <ListWrap>
              <ListItem>
                <div className="address">
                  <img src={AddressImg} alt="" />
                </div>
              </ListItem>
              <ListItem>
                <Link to="/cart">
                  <div className="cart">
                    <img src={CartImg} alt="" />

                    <div className="num">{cartItems.length}</div>
                  </div>
                </Link>
              </ListItem>
              <ListItem className="mypage">
                <Link to="/mypage">{user.currentUser?.displayName}님</Link>
                <div className="subNav">
                  <ul>
                    <li>주문내역</li>
                    <li>찜한상품</li>
                  </ul>
                </div>
              </ListItem>
              <ListItem onClick={handleLogout}>로그아웃</ListItem>
            </ListWrap>
          ) : (
            <ListWrap>
              <ListItem>
                <Link to="/join">회원가입</Link>
              </ListItem>
              <ListItem>
                <Link to="login">로그인</Link>
              </ListItem>
            </ListWrap>
          )}
        </nav>
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  background-color: #fff;

  .logo-wrap {
    display: flex;
    h1 {
      width: 60px;
      margin-right: 25px;

      & img {
        width: 100%;
      }
    }

    nav {
      &.left {
        display: flex;
        align-items: center;
      }
    }
  }

  .search-wrap {
    display: flex;
    align-items: center;

    nav {
      &.right {
        .address {
          width: 30px;
          cursor: pointer;
        }
        .cart {
          position: relative;
          width: 30px;

          .num {
            position: absolute;
            left: 20px;
            top: -3px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 20px;
            height: 20px;
            padding: 0 5px;
            border: 1px solid #fff;
            border-radius: 10px;
            background-color: #5f0080;
            font-size: 9px;
            color: #fff;
          }
        }

        & img {
          width: 100%;
        }
      }
    }
  }

  @media ${theme.device.mobile} {
    padding: 0 10px;
    .logo-wrap {
      h1 {
        width: 60px;
        margin-right: 10px;
      }
    }

    input {
      &.search {
        width: 100px;
        padding: 0 20px 0 14px;
      }
    }
  }
`;

const ListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  padding: 0 10px;
  color: #333;
  font-size: 14px;

  &.mypage {
    position: relative;
    &:hover {
      .subNav {
        opacity: 1;
      }
    }

    .subNav {
      opacity: 0;
      position: absolute;
      top: 20px;
      left: 10px;
      width: 100px;
      border: 1px solid #ddd;
      padding: 5px;
      font-size: 12px;
      background-color: #fff;

      li {
        padding: 5px 0;
      }
    }
  }

  @media ${theme.device.mobile} {
    padding: 0 5px;
    font-size: 13px;
  }
`;
