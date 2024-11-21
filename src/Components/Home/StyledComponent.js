import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultDisplay = styled.div`
  border: 1px solid #ffffff;
  width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  border-radius: 14px;
`
export const RockPaperScissorsCon = styled.div`
  color: #ffffff;
`
export const Results = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 14px;
`
export const RockPaperScissors = styled.p`
  font-size: 24px;
  margin: 0px;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  font-size: 24px;
  color: #223a5f;
  margin: 0px;
  font-family: Roboto;
`
export const Numbers = styled.p`
  font-size: 28px;
  color: #223a5f;
  margin: 0px;
  font-weight: bold;
`
export const UnOrderList = styled.ul`
  padding: 0;
  margin: 0;
  display: ${props => (props.value ? 'none' : 'flex')};
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
`
export const Image = styled.img`
  width: 200px;
`
export const ListItem = styled.li`
  list-style: none;
`
export const Button = styled.button`
  background: transparent;
  border: 0px solid;
  cursor: pointer;
`
export const ResultFlex = styled.div`
  display: 'none';
`
