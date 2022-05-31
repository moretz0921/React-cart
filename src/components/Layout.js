import React from 'react';
import styled from 'styled-components';

function Container({ children, paddingLeft, paddingRight, paddingBottom }) {
  return (
    <InnerContainer
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
    >
      {children}
    </InnerContainer>
  );
}

export default Container;

const InnerContainer = styled.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-right: ${(props) => `${props.paddingRight}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
`;
