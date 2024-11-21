import {Component} from 'react'
import {
  MainContainer,
  ResultDisplay,
  RockPaperScissorsCon,
  RockPaperScissors,
  Results,
  Score,
  Numbers,
  UnOrderList,
  ListItem,
  Image,
  Button,
  ResultFlex,
} from './StyledComponent'
import Result from '../Result'

class Home extends Component {
  state = {
    bool: false,
    myChoice: 'image',
    opponentChoice: 'image',
    newChoicesList: [],
    result: 0,
  }

  getTheImage = value => {
    const {choicesList} = this.props
    const random = Math.floor(Math.random() * choicesList.length)

    // Update state with choices
    this.setState(
      {
        bool: true, // Show result after the choice is made
        myChoice: value,
        opponentChoice: choicesList[random].id,
        newChoicesList: choicesList,
      },
      () => {
        // Compare choices and update the result
        this.calculateResult()
      },
    )
  }

  calculateResult = () => {
    const {myChoice, opponentChoice} = this.state
    let resultUpdate = 0

    if (
      (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (myChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (myChoice === 'SCISSORS' && opponentChoice === 'PAPER')
    ) {
      resultUpdate = 1 // Player wins
    } else if (myChoice === opponentChoice) {
      resultUpdate = 0 // Draw
    } else {
      resultUpdate = -1 // Opponent wins
    }

    // Update score
    this.setState(prevState => ({
      result: prevState.result + resultUpdate,
    }))
  }

  play = bool => {
    this.setState({bool})
  }

  render() {
    const {bool, myChoice, opponentChoice, newChoicesList, result} = this.state
    const {choicesList} = this.props

    return (
      <MainContainer>
        <ResultDisplay>
          <RockPaperScissorsCon>
            <RockPaperScissors>Rock</RockPaperScissors>
            <RockPaperScissors>Paper</RockPaperScissors>
            <RockPaperScissors>Scissors</RockPaperScissors>
          </RockPaperScissorsCon>
          <Results>
            <Score>Score</Score>
            <Numbers>{result}</Numbers>
          </Results>
        </ResultDisplay>
        <UnOrderList value={bool}>
          {choicesList.map(each => (
            <ListItem key={each.id} value={each.imageUrl}>
              <Button
                type="button"
                data-testid={`${each.id.toLowerCase()}Button`}
                onClick={() => this.getTheImage(each.id)}
              >
                <Image src={each.imageUrl} alt={each.id} />
              </Button>
            </ListItem>
          ))}
        </UnOrderList>
        <ResultFlex bool={bool}>
          <Result
            myChoice={myChoice}
            opponentChoice={opponentChoice}
            newChoicesList={newChoicesList}
            play={this.play}
            bool={bool}
          />
        </ResultFlex>
      </MainContainer>
    )
  }
}

export default Home
