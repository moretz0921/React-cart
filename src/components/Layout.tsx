import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

type ContainerProps = {
  children: any;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
};

function Container({
  children,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
}: ContainerProps) {
  return (
    <InnerContainer
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
    >
      {children}
    </InnerContainer>
  );
}

export default Container;

const InnerContainer = styled.div<{
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
}>`
  min-width: 100%;
  width: 100%;
  height: 100%;
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-right: ${(props) => `${props.paddingRight}px`};
  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-bottom: ${(props) => `${props.paddingBottom}px`};

  @media ${theme.device.mobile} {
    padding: 0 10px;
  }

  @media ${theme.device.iphone} {
  }
`;
