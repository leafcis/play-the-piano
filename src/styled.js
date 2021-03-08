import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background: rgb(146 139 116 / 16%);
`

export const Header = styled.div`
  font-family: 'Pacifico';
  font-size: 60px;
  cursor: default;
  user-select: none;
`

export const KeyBoardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  height: 305px;
`

export const PlayerWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Recording = styled.div`
  background: rgb(232, 4, 21);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 24px;
  color: #ffffff;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 3px 0px 0px 0px;

  margin-right: 20px;
`

export const Play = styled.div`
  background: blue;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 28px;
  color: #ffffff;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0px 0px 1px 3px;
`