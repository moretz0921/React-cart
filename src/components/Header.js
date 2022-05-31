import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import '../firebase';
import { signOut, getAuth } from 'firebase/auth';
import theme from '../styles/theme';

function Header() {
  const { user } = useSelector((state) => state);

  console.log('ㅇㅇ', user);
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
        <div className="search-box">
          <input
            name="sword"
            type="text"
            required="required"
            label="검색어"
            placeholder="검색어를 입력해주세요."
            className="search"
          />
          <input
            type="image"
            src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
            className="btn_search"
          ></input>
        </div>
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
      &.right {
        .cart {
          width: 30px;

          & svg {
            width: 100%;
          }
        }
      }
    }
  }

  .search-wrap {
    display: flex;
    align-items: center;

    .search-box {
      position: relative;
      margin-right: 10px;
      input {
        &.search {
          max-width: 242px;
          width: 100%;
          height: 36px;
          padding: 0 60px 0 14px;
          border: 1px solid #f7f7f6;
          border-radius: 18px;
          background-color: #f7f7f7;
          font-family: 'Noto Sans';
          font-weight: 400;
          font-size: 12px;
          color: #666;
          line-height: 16px;
          outline: none;
        }

        &.btn_search {
          position: absolute;
          right: 5px;
          top: 3px;
          width: 30px;
          height: 30px;

          & img {
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
