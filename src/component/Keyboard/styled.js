import styled from 'styled-components';

export const White = styled.div`
  width: 50px;
  height: 300px;
  cursor: pointer;
  box-shadow: 0 5px 1px rgb(32 32 32 / 20%);
  border-radius: 0px 0px 4px 4px;
  transition: .1s all;
  background: #ffffff;

  &:active {
    box-shadow: none;
    margin-top: 5px;
    background-color: rgb(32 32 32 / 20%);
  }
`

export const Black = styled.div`
  width: 40px;
  height: 150px;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 32px;
  pointer-events: initial;
  z-index: 3;
  cursor: pointer;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 5px 1px rgb(32 32 32 / 20%);

  transition: .1s all;

  &:active {
    box-shadow: none;
    margin-top: 5px;
  }
`

export const SoundWrapper = styled.div`
  position: relative;
`