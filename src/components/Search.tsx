import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSearch } from 'hooks/useSearch';
import InnerContainer from './Layout';

function Search() {
  const location = useLocation();
  const searchUrl = new URLSearchParams(location.search).get('q');
  const { isLoading, isError, searchData } = useSearch(searchUrl);

  return (
    <InnerContainer paddingLeft={20} paddingRight={20}>
      {isLoading || isError ? (
        <div>로딩중</div>
      ) : (
        <SearchWrap>
          <SearchList>
            {searchData &&
              searchData.map((item: any, idx: number) => {
                return (
                  <SearchItem key={item.id}>
                    <div className="img-wrap">
                      <img src={item.imgSrc} alt="" />
                    </div>

                    <div className="desc-wrap">
                      <h3>{item.name}</h3>
                      <p>{item.price.toLocaleString()}원</p>
                    </div>
                  </SearchItem>
                );
              })}
          </SearchList>
        </SearchWrap>
      )}
    </InnerContainer>
  );
}

export default Search;

const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 100px 0;
`;

const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const SearchItem = styled.li`
  flex: 0 0 25%;
  padding-right: 10px;
  cursor: pointer;
  .img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
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
`;
