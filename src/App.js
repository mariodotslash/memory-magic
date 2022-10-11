import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/singleCard';

const cardImages = [

  {'src': "./img/cards/2-1.svg", number:'2', color: 'red', matched: false},
  {'src': "./img/cards/3-1.svg", number:'3', color: 'red', matched: false},
  {'src': "./img/cards/4-1.svg", number:'4', color: 'red', matched: false},
  {'src': "./img/cards/5-1.svg", number:'5', color: 'red', matched: false},
  {'src': "./img/cards/6-1.svg", number:'6', color: 'red', matched: false},
  {'src': "./img/cards/7-1.svg", number:'7', color: 'red', matched: false},
  {'src': "./img/cards/8-1.svg", number:'8', color: 'red', matched: false},
  {'src': "./img/cards/9-1.svg", number:'9', color: 'red', matched: false},
  {'src': "./img/cards/10-1.svg", number:'10', color: 'red', matched: false},
  {'src': "./img/cards/J-1.svg", number:'J', color: 'red', matched: false},
  {'src': "./img/cards/Q-1.svg", number:'Q', color: 'red', matched: false},
  {'src': "./img/cards/K-1.svg", number:'K', color: 'red', matched: false},
  {'src': "./img/cards/A-1.svg", number:'A', color: 'red', matched: false},
  
  {'src': "./img/cards/2-2.svg", number:'2', color: 'red',  matched: false},
  {'src': "./img/cards/3-2.svg", number:'3', color: 'red', matched: false},
  {'src': "./img/cards/4-2.svg", number:'4', color: 'red', matched: false},
  {'src': "./img/cards/5-2.svg", number:'5', color: 'red', matched: false},
  {'src': "./img/cards/6-2.svg", number:'6', color: 'red', matched: false},
  {'src': "./img/cards/7-2.svg", number:'7', color: 'red', matched: false},
  {'src': "./img/cards/8-2.svg", number:'8', color: 'red', matched: false},
  {'src': "./img/cards/9-2.svg", number:'9', color: 'red', matched: false},
  {'src': "./img/cards/10-2.svg", number:'10', color: 'red', matched: false},
  {'src': "./img/cards/J-2.svg", number:'J', color: 'red', matched: false},
  {'src': "./img/cards/Q-2.svg", number:'Q', color: 'red', matched: false},
  {'src': "./img/cards/K-2.svg", number:'K', color: 'red', matched: false},
  {'src': "./img/cards/A-2.svg", number:'A', color: 'red', matched: false},

  {'src': "./img/cards/2-3.svg", number:'2', color: 'black', matched: false},
  {'src': "./img/cards/3-3.svg", number:'3', color: 'black', matched: false},
  {'src': "./img/cards/4-3.svg", number:'4', color: 'black', matched: false},
  {'src': "./img/cards/5-3.svg", number:'5', color: 'black', matched: false},
  {'src': "./img/cards/6-3.svg", number:'6', color: 'black', matched: false},
  {'src': "./img/cards/7-3.svg", number:'7', color: 'black', matched: false},
  {'src': "./img/cards/8-3.svg", number:'8', color: 'black', matched: false},
  {'src': "./img/cards/9-3.svg", number:'9', color: 'black', matched: false},
  {'src': "./img/cards/10-3.svg", number:'10', color: 'black', matched: false},
  {'src': "./img/cards/J-3.svg", number:'J', color: 'black', matched: false},
  {'src': "./img/cards/Q-3.svg", number:'Q', color: 'black', matched: false},
  {'src': "./img/cards/K-3.svg", number:'K', color: 'black', matched: false},
  {'src': "./img/cards/A-3.svg", number:'A', color: 'black',matched: false},

  {'src': "./img/cards/2-4.svg", number:'2', color: 'black', matched: false},
  {'src': "./img/cards/3-4.svg", number:'3', color: 'black', matched: false},
  {'src': "./img/cards/4-4.svg", number:'4', color: 'black', matched: false},
  {'src': "./img/cards/5-4.svg", number:'5', color: 'black', matched: false},
  {'src': "./img/cards/6-4.svg", number:'6', color: 'black', matched: false},
  {'src': "./img/cards/7-4.svg", number:'7', color: 'black', matched: false},
  {'src': "./img/cards/8-4.svg", number:'8', color: 'black', matched: false},
  {'src': "./img/cards/9-4.svg", number:'9', color: 'black', matched: false},
  {'src': "./img/cards/10-4.svg", number:'10', color: 'black', matched: false},
  {'src': "./img/cards/J-4.svg", number:'J', color: 'black', matched: false},
  {'src': "./img/cards/Q-4.svg", number:'Q', color: 'black', matched: false},
  {'src': "./img/cards/K-4.svg", number:'K', color: 'black', matched: false},
  {'src': "./img/cards/A-4.svg", number:'A', color: 'black', matched: false},

  {'src': "./img/cards/Joker_1.svg", number:'Joker',  matched: false},
  {'src': "./img/cards/Joker_2.svg", number:'Joker', matched: false},
]; 

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [p1Name, setP1Name] = useState('');
  const [p2Name, setP2Name] = useState('');
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [matchMade, setMatchMade] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [winnerName, setWinnerName] = useState(null);
  const [winnerScore, setWinnerScore] = useState(null);
  const [loserName, setLoserName] = useState(null);
  const [loserScore, setLoserScore] = useState(null);

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setPlayerTurn(true);
    setP1Score(0);
    setP2Score(0);
    setTotalScore(0);
  }

  //handle a choice 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //handle change to 
  const handleChange1 = (e) => {
    setP1Name(e.target.value);
  }

  const handleChange2 = (e) => {
    setP2Name(e.target.value);
  }

  //compare score
  useEffect(() => {
    if(p1Score > p2Score) {
      setWinnerName(p1Name);
      setWinnerScore(p1Score);
      setLoserName(p2Name);
      setLoserScore(p2Score);
    } else {
      setWinnerName(p2Name);
      setWinnerScore(p2Score);
      setLoserName(p1Name);
      setLoserScore(p1Score);

    }
  },[p1Score, p2Score])

  //compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.number === choiceTwo.number && choiceOne.color === choiceTwo.color ){  
        addPoints();
        totalPoints();
        setTimeout(() =>setMatchMade(true), 500);
        setTimeout(() =>setMatchMade(false), 1000);
        
      
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceTwo.src || card.src ===  choiceOne.src ){
              return{...card, matched: true,}
              
            } else {
              return card
            }
          })
        })
      resetTurn();
      } else {
      setTimeout(() =>resetTurn(), 1000);
      setTimeout(() =>changeTurn(), 1000);
    }
  }
  },[choiceOne, choiceTwo ]);

  //reset a choice 
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    totalPoints();
  }

  //add points
  const addPoints = () => {
    (playerTurn)? setP1Score(p1Score +1) : setP2Score(p2Score +1);
  }

  //change turn 
  const changeTurn = () => {
    setPlayerTurn(!playerTurn);
  }

  const showGameScreen = () => {
    setShowGame(!showGame);
  }

  const totalPoints = () => {
    setTotalScore(p1Score + p2Score +1)
    
  }

  //start new game
  useEffect(() => {
    shuffleCards();   
  }, [])
  

  return (a
    <div className="App">
      <div className='gradient-blob-1'/>
        <div className='gradient-blob-2'/>
        <div className='gradient-blob-3'/>
      <div className='container-fluid'>
        <div className='row text-center py-4 justify-content-between flex-wrap'>
          <div class="col-sm-7 d-flex  heading align-items-center">
            <h1 className={totalScore === 27 ? 'd-none' : ''} >Memory</h1>
          </div>
         
          <div class="col-sm-4 pt-2 ms-1 text-center ">    
            <button type="button" class={(!showGame || totalScore === 27) ? 'd-none': "btn btn-warning styled-btn me-3" } onClick={shuffleCards}>Restart Game</button>
            <button type="button" class="btn btn-danger styled-btn" onClick={showGameScreen}>Exit Game</button>
          </div>
        </div>

        <div className={showGame ? 'd-none' :'container py-5 spacing glass-bg'}> 
          <div className='row text-center'>
            <div className='col-12 '>
              <h1>Are you ready to play?</h1>
            </div>
            
            <div className='col-6'>
              <form>
                <img className='avatar-size py-2' src='./img/balloonman.png'  alt='player1'/>
                <input type="text" class="form-control" id='p1Name' onChange={handleChange1}
                  placeholder='Name of Player 1'/>
              </form>
            </div>

            <div className='col-6 '>
              <form>
                <img className='avatar-size py-2' src='./img/rocketman.png'  alt='player2'/>
                <input type="text" class="form-control" id='p2Name'  onChange={handleChange2}
                  placeholder='Name of Player 2'/>
              </form>
            </div>

            <div className='col-12 pt-5'>
              <button type="button" class="btn btn-lg btn-success play-btn " onClick={showGameScreen}>Let's Play</button>
            </div>
          </div>
        </div>
 
        <div className={(!showGame || totalScore === 27) ? 'd-none' : 'container'}>
          <div className='row justify-content-between align-items-center'>
            <div className='col-2  text-center'>
              <div className='player-backlay py-2'>
              <img src='./img/balloonman.png'  alt='player1'/>
                <p className='player-name pt-3'>{p1Name} </p>
                <p className='player-score'>Score: {p1Score} </p>
              </div>
            <p className={playerTurn ? 'p1-turn py-2 mt-2' : 'disappear py-2 mt-2'}>It's Your Turn</p>
          </div>
          <div className='card-grid col-8 '>
            <img className={matchMade ? 'matched-1' : 'd-none'} src='./img/matchMade.png' alt='matched'/>
            {cards.map(card => (
              <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched } disabled={disabled} matched={card.matched}/>
            ))}
          </div>
          
          <div className='col-2  text-center '>
            <div className='player-backlay py-2'>
              <img src='./img/rocketman.png'  alt='player2'/>
              <p className='player-name pt-3'>{p2Name} </p>
              <p className='player-score'>Score: {p2Score} </p>  
            </div>
            <p className={playerTurn ? 'disappear py-2 mt-2' : 'p2-turn py-2 mt-2'}>It's Your Turn</p>
          </div>
        </div>
      </div>
      
    </div>
    
    <div className={(totalScore === 27) ? 'container text-center spacing' : 'd-none'}>
      <h1>Well Done!</h1>
      <h1>Player 1</h1>
      <img className='champion my-2' src='./img/champ.png'  alt='champion'/>
      <div className='row winner py-2 champion-text  align-items-center position-relative'>

        <div className='position-absolute'>
          <img className='trophy' src='./img/Icon.png'  alt='trophy'/>
        </div>

        <div className='col-2'>
          <img className='baby-avatar' src='./img/rocketman.png'  alt='player2'/>
        </div>
        
        <div className='col-3 placement'>
          <p>1st Place</p>
        </div>

        <div className='col-3 score'>
          <p>{winnerName}</p>
        </div>

        <div className='col-3 score'>
          <p>Score: {winnerScore}</p>
        </div>

      </div>

      <div className='row loser mt-2 py-2 champion-text  align-items-center'>
        <div className='col-2'>
          <img className='baby-avatar' src='./img/rocketman.png'  alt='player2'/>
        </div>

        <div className='col-3 placement'>
          <p>2nd Place</p>
        </div>

        <div className='col-3 score'>
          <p>{loserName}</p>
        </div>

        <div className='col-3 score'>
          <p>Score: {loserScore}</p>
        </div>

      </div>

      <div className='mt-4'>
        <button type="button" class="btn btn-lg btn-info play-again-btn"  onClick={shuffleCards}>PLAY AGAIN</button>
      </div>
      </div>
      
    </div>
  );
}

export default App