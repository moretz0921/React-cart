import styled from 'styled-components';

function Button({ prev, next, handleSlide }) {
  return <ButtonStyle prev={prev} next={next} onClick={handleSlide} />;
}

export default Button;

const ButtonStyle = styled.div`
  position: absolute;
  top: 50%;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease 0s;
  cursor: pointer;
  z-index: 1001;

  &:after {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 54%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: translate(-50%, -50%) rotate(135deg);
  }
  ${({ prev }) =>
    prev &&
    `
    left:0;
  `}
  ${({ next }) =>
    next &&
    `
    right:0;
    &:after {
      left: 47%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;
