
import "../../App.css"
import { Carousel } from "../Carousel"
import {slides} from "../../assets/carouselData.json"
import animationData from '../../assets/animationTigre.json';
import animationData1 from '../../assets/animationPanda.json'
import Lottie from 'react-lottie'



function CreationPage() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className="creationPage-container">

<div className="carousel-container">
<Carousel data={slides}/>
<Carousel data={slides}/>
<Carousel data={slides}/>


</div>

        <li className='passion-li'>
          <h2>Petit mot sur mes créations ! </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis accusantium magnam rem. Sapiente explicabo voluptatibus error quos, aliquid a blanditiis praesentium. Dicta, dolorum quia aliquam dignissimos delectus porro unde ducimus!</p>
        </li>
       
        <div className="animation-container-tigre">
      <Lottie options={defaultOptions} height={200} width={170} />
    </div>
    <div className="animation-container-panda">
      <Lottie options={defaultOptions1} height={200} width={200} />
    </div>



    </div>
    
  )
}

export default CreationPage
