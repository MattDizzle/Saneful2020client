import videologo from './navywhitelogo.png';
import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import cutscene_start from './saneful-clouds1.mp4';
import './StartCutscene.scss';

const StartCutscene = () => {
  const userContext = useContext(UserContext);

  return (
    <section>
      <div className="fullscreen-bg">
      <video onClick={() => userContext.setStartClicked(true)} id="fullscreen-bg__video" width="100%" height="100%" playsInline autoPlay={true} muted loop>
        <source src={cutscene_start} type="video/mp4" />
    </video>
        {userContext.startClicked ? <></> :<p onClick={() => userContext.setStartClicked(true)} className='push'>click to start</p> }
        {userContext.startClicked ? <></> :<img onClick={() => userContext.setStartClicked(true)} src={videologo} className='video-logo' alt='saneful logo'/> }
      </div>
    </section>
  );
};

export default StartCutscene;