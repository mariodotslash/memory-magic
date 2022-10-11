import './singleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled, matched }) {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className='card' >
            <div className={flipped ? 'flipped' : ''}>
              <img className={matched ? 'disappear front' : 'front'} alt='card front' src={card.src} />
              <img className={matched ? 'disappear back' : 'back'} onClick={handleClick}  alt='card back' src='./img/Card_Back.svg' />
            </div>
          </div>
    )
}