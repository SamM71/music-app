import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const LikeButton = () => {
  const [image, setLiked] = useState(reactLogo);
  const [isClicked, setIsClicked] = useState(false);
  

  const handleClick = () => {
    if (isClicked) {
      setLiked(reactLogo);
    } else {
      setLiked(viteLogo);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter"><img src={image}/></span>
    </button>
  );
};

function Info() {
  return (
    <>
      <h1>The Kooks</h1>
      <div className="info">
        <p>
          Genre: Pop-rock
        </p>
        <p>
          The Kooks are an English pop-rock band formed in 2004 in Brighton. The band currently consists of Luke Pritchard (vocals/rhythm guitar), Hugh Harris (lead guitar/synthesizer/bass) and Alexis Nunez (drums).
        </p>
      </div>
    </>
  )
}

function Songs() {
  return (
    <>
      <h2>Songs: </h2>
      <div className="list">
        <ul>
          <li>Naive<LikeButton/></li>
          <li>She Moves In Her Own Way<LikeButton/></li>
          <li>Seaside<LikeButton/></li>
        </ul>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Info />
      <Songs />
    </>
  )

}

export default App
