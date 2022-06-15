import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };

  const loginUser = async (email: string, password: any) => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError('모든 항목을 입력해주세요.');
      return;
    }

    loginUser(email, password);
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
      <LoginWrap>
        <h3>로그인</h3>
        <div>
          <IdWrap>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={onEmailHandler}
              ref={emailInputRef}
            ></input>
          </IdWrap>

          <PwWrap>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onPasswordHandler}
            ></input>
          </PwWrap>

          
          <div className="error">{error}</div>

          <SubmitWrap>
            <button type="submit" className="btn-signin" onClick={handleSubmit}>
              <span>로그인</span>
            </button>
            <Link to="/join" className="login-move">
              계정이 없나요? <span>회원가입</span>으로 이동
            </Link>
          </SubmitWrap>
        </div>
      </LoginWrap>
    </>
  );
}

export default Login;

const LoginWrap = styled.div`
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
