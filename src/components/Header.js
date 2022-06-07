import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import '../firebase';
import { signOut, getAuth } from 'firebase/auth';
import theme from '../styles/theme';

import SearchInput from '../components/UI/SearchInput';

function Header({ cartItems }) {
  const { user } = useSelector((state) => state);

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
                <Link to="/cart">
                  <div className="cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
                    </svg>

                    <div className="num">{cartItems.length}</div>
                  </div>
                </Link>
              </ListItem>
              <ListItem>{user.currentUser?.displayName}님</ListItem>
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
        .cart {
          position: relative;
          width: 30px;

          .num {
            position: absolute;
            left: 16px;
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

          svg {
            width: 100%;
          }
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

  @media ${theme.device.mobile} {
    padding: 0 5px;
    font-size: 13px;
  }
`;
