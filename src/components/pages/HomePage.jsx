import { useState } from 'react'
import coeur from '../../assets/coeur.png'
import '../../App.css'
import Lottie from 'react-lottie'
import animationData from '../../assets/animationChateau.json'

function HomePage() {
  const [count, setCount] = useState(0)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={coeur} className="logo-coeur" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenue ! </h1>
      <div className="compteur">
        <button onClick={() => setCount((count) => count + 1)}>
        <img src={coeur} className="logo-coeur-compteur" alt="React logo" />
        
        <p>{count}</p>
        </button>
       
      </div>
      <p className="accueil-phrase-compteur">
        Cliquez si mon site vous plait !
      </p>


      <div className="animation-container">
      <Lottie options={defaultOptions}  />
    </div>

    </>
  )
}

export default HomePage
