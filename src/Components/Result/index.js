import {
  ResultDisplayContainer,
  MyContainer,
  MyHeading,
  MySelectedImg,
  PlayButton,
  Con,
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
    <Con>
      <ResultDisplayContainer>
        <MyContainer>
          <MyHeading>You</MyHeading>
          <MySelectedImg src={myFinalChoice[0].imageUrl} alt="your choice" />
        </MyContainer>
        <MyContainer>
          <MyHeading>Opponent</MyHeading>
          <MySelectedImg
            src={opponentFinalChoice[0].imageUrl}
            alt="opponent choice"
          />
        </MyContainer>
      </ResultDisplayContainer>
      <PlayButton type="button" onClick={playAgain}>
        Play Again
      </PlayButton>
    </Con>
  )
}

export default Result
