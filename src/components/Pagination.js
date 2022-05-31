import React from 'react';
import styled from 'styled-components';

import { ReactComponent as PrevIcon } from '../assets/images/prev.svg';
import { ReactComponent as NextIcon } from '../assets/images/next.svg';

function Pagination({
  currentPage,
  setCurrentPage,
  totalCount,
  pageGroup,
  prev,
  next,
}) {
  return (
    <Nav>
      {currentPage !== 1 && (
        <PrevIcon
          width="24"
          cursor="pointer"
          fill="var(--text)"
          onClick={() => setCurrentPage((prev) => prev - 1)}
        />
      )}
      {`총 ${totalCount} 중 `}
      <PageSelect
        name="page"
        value={currentPage}
        onChange={(e) => setCurrentPage(parseInt(e.target.value))}
      >
        {Array(pageGroup)
          .fill()
          .map((data, idx) => (
            <option value={idx + 1} key={idx + 1}>
              {idx + 1}
            </option>
          ))}
      </PageSelect>
      페이지
      {currentPage !== pageGroup && (
        <NextIcon
          width="24"
          cursor="pointer"
          fill="var(--text)"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        />
      )}
    </Nav>
  );
}

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  color: var(--text); ;
`;

const PageSelect = styled.select`
  cursor: pointer;
  background-color: var(--primary);
  border: none;
  font-size: 16px;
  color: var(--highlight);
  font-weight: bold;
  font-family: inherit;
  &:focus {
    outline: none;
  }
`;
