import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/userReducer';

const IsPasswordValid = (password: any, confirmPassword: any) => {
  if (password.length < 6 || confirmPassword.length < 6) {
    return false;
  } else if (password !== confirmPassword) {
    return true;
  }
};

function Join() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setconfirmPassword] = useState<string>('');

  const onNicknameHandler = (e: any) => {
    setNickname(e.currentTarget.value);
  };

  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e: any) => {
    setconfirmPassword(e.currentTarget.value);
  };

  const postUserData = async (name: string, email: string, password: any) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      await updateProfile(user, {
        displayName: name,
      });
      await set(ref(getDatabase(), 'users/' + user.uid), {
        name: user.displayName,
      });
      // store에 user 저장
      dispatch(setUser(user));
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!nickname || !email || !password || !confirmPassword) {
      setError('모든 항목을 입력해주세요');
      return;
    }

    if (IsPasswordValid(password, confirmPassword)) {
      setError('비밀번호를 확인하세요');
      return;
    }

    postUserData(nickname, email, password);
  };

  useEffect(() => {
    if (!error) return;
    setTimeout(() => {
      setError('');
    }, 3000);
  }, [error]);

  useEffect(() => {
    if (emailInputRef.current !== null) {
      emailInputRef.current.focus();
    } 
  }, [])

  return (
    <>
      <Login>
        <h3>회원가입</h3>
        <div>
          <IdWrap>
            <input
              type="text"
              name="name"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={onNicknameHandler}
              ref={emailInputRef}
            />
          </IdWrap>

          <IdWrap>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={onEmailHandler}
            ></input>
          </IdWrap>

          <IdWrap>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onPasswordHandler}
            ></input>
          </IdWrap>

          <PwWrap>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 확인해주세요"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
            ></input>
          </PwWrap>

          <div className="error">{error}</div>

          <SubmitWrap>
            <button type="submit" className="btn-signin" onClick={handleSubmit}>
              <span>회원가입</span>
            </button>
            <Link to="/login" className="login-move">
              이미 계정이 있나요? <span>로그인</span>으로 이동
            </Link>
          </SubmitWrap>
        </div>
      </Login>
    </>
  );
}

export default Join;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  height: 100vh;
  margin: 0 auto;

  > h3 {
    margin-bottom: 20px;
    color: #000;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .error {
    margin-bottom: 20px;
    padding-left: 5px;
    color: rgb(233, 78, 88);
    font-size: 12px;
  }
`;

const IdWrap = styled.div`
  margin-bottom: 10px;

  input {
    width: 100%;
    height: 54px;
    padding: 0 19px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    line-height: 20px;
    outline: none;
  }
`;

const PwWrap = styled.div`
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 54px;
    padding: 0 19px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    line-height: 20px;
    outline: none;
  }
`;

const SubmitWrap = styled.div`
  button {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    text-align: center;

    &.btn-signin {
      margin-bottom: 10px;
      border: 1px solid #5f0081;
      background-color: #5f0080;
      cursor: pointer;

      > span {
        color: #fff;
      }
    }
  }

  .login-move {
    text-decoration: none;
    font-size: 13px;
    float: right;
    color: #333;

    > span {
      font-weight: bold;
      color: #5f0080;
    }
  }
`;
