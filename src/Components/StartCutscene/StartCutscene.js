import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import cutscene_start from './saneful-clouds.mp4';
import './StartCutscene.scss';

const StartCutscene = () => {
  const userContext = useContext(UserContext);
  console.log(process.env.REACT_APP_API_ENDPOINT)

  return (
    <section>
      <div className="fullscreen-bg">
        <video onClick={() => userContext.setStartClicked(true)} playsInline autoPlay={true} muted loop src={cutscene_start} className="fullscreen-bg__video" type="video.mp4" />
        {userContext.startClicked ? <></> :<p className='push'>click to start</p> }
      </div>

      
      

    </section>
  );
};

export default StartCutscene;