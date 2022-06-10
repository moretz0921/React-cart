import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function SearchInput() {
  const [searchText, setSearchText] = useState<string>('');
  const [searchParams, setSerachParams] = useSearchParams();

  useEffect(() => {
    setSearchText(searchParams.get('q') ?? '');
  }, [searchParams]);

  const onChangeInput = useCallback((e: any) => {
    setSearchText(e.target.value);
  }, []);

  const onKeyUp = useCallback(
    (e: any) => {
      if (e.key === 'Enter' && e.target.value.trim().length > 0) {
        setSerachParams({ q: e.target.value });
      }
    },
    [setSerachParams]
  );

  return (
    <InputWrap>
      <input
        name="sword"
        className="search"
        value={searchText}
        type="text"
        placeholder="검색어를 입력해 주세요."
        onChange={onChangeInput}
        onKeyUp={onKeyUp}
      />
      <input
        onClick={onKeyUp}
        type="image"
        src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
        className="btn_search"
      />
    </InputWrap>
  );
}

export default SearchInput;

const InputWrap = styled.div`
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
`;
