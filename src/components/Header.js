import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../firebase';
import { signOut, getAuth } from 'firebase/auth';

function Header() {
  const { user } = useSelector((state) => state);

  console.log('ㅇㅇ', user);
  const handleLogout = useCallback(async () => {
    await signOut(getAuth());
  }, []);

  return (
    <HeaderWrap>
      <h1>
        <Link to="/">로고</Link>
      </h1>
      <nav>
        {user.currentUser ? (
          <ListWrap>
            <ListItem>{user.currentUser?.displayName}님</ListItem>
            <ListItem onClick={handleLogout}>로그아웃</ListItem>
          </ListWrap>
        ) : (
          <ListWrap>
            <ListItem>회원가입</ListItem>
            <ListItem>로그인</ListItem>
          </ListWrap>
        )}
      </nav>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0 20px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  background-color: #fff;
  nav {
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
`;
