import { useState } from 'react'
import likeIcon from './assets/like_empty.png'
import likedIcon from './assets/like_filled.png'
import './App.css'

const LikeButton = () => {
  const [image, setLiked] = useState(likeIcon);
  const [isClicked, setIsClicked] = useState(false);
  

  const handleClick = () => {
    if (isClicked) {
      setLiked(likeIcon);
    } else {
      setLiked(likedIcon);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter"><img src={image} alt="like button" width="25" height="25"/></span>
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
