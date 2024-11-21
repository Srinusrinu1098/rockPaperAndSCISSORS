import {
  ResultDisplayContainer,
  MyContainer,
  MyHeading,
  MySelectedImg,
  PlayButton,
} from './StyledComponent'

const Result = props => {
  const {myChoice, opponentChoice, newChoicesList, play} = props
  const myFinalChoice = newChoicesList.filter(each => each.id === myChoice)
  const opponentFinalChoice = newChoicesList.filter(
    each => each.id === opponentChoice,
  )

  const playAgain = () => {
    play(false)
  }

  return (
    <ResultDisplayContainer>
      <MyContainer>
        <MyHeading>You</MyHeading>
        <MySelectedImg src={myFinalChoice.imageUrl} alt="your choice" />$
      </MyContainer>
      <MyContainer>
        <MyHeading>You</MyHeading>
        <MySelectedImg src={opponentFinalChoice} alt="opponent choice" />
      </MyContainer>
      <PlayButton type="button" onClick={playAgain}>
        Play Again
      </PlayButton>
    </ResultDisplayContainer>
  )
}

export default Result
