import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const [loading, setLoading] = useState(false);

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const loginUser = async (email, password) => {
    //setLoading(true);
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (e) {
      setError(e.message);
      //setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
  width: 340px;
  margin: 0 auto;
  padding-top: 90px;

  > h3 {
    margin-bottom: 20px;
    color: #000;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
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
