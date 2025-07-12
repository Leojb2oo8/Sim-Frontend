import { page, sizeValue, variantValue } from '../../utils/Constants';
import { Button } from '../../components/button/Button';
import { HelpButton } from '../../components/help-button/HelpButton';
import { LogoComponent } from '../../components/imgs/Logo';
import { ProgressBar } from '../../components/progres-bar/ProgressBar';
import style from './LoadingScreen.module.scss';
import { useState } from 'react';

const LoadingScreen = ({ OnChagePage }) => {
  const [percentage, setPercentage] = useState(20);
  
  const HandelOnClick = () => {
    OnChagePage(page.dataScreen)
  }
  return (
    <>
      <div className='help'><HelpButton>?</HelpButton></div>
      <div className={`flex-center ${style.container}`}>
        <div className={`flex-center ${style.logo}`}><LogoComponent size='550' animate={true} /></div>
        <ProgressBar percentage={percentage}/>
        <div className='flex-center'><Button size={sizeValue.small} variant={variantValue.secondary} onClick={HandelOnClick}>{`${percentage}%`}</Button></div>
      </div>
    </>
  );
}

export default LoadingScreen;
