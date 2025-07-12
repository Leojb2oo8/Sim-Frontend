import { page } from '../../utils/Constants';
import { Button } from '../../components/button/Button';
import { HelpButton } from '../../components/help-button/HelpButton';
import { LogoComponent } from '../../components/imgs/Logo';
import { ProgressBar } from '../../components/progres-bar/ProgressBar';
import style from './LoadingScreen.module.scss';

const LoadingScreen = ({ OnChagePage }) => {
  const HandelOnClick = () => {
    OnChagePage(page.dataScreen)
  }
  return (
    <>
      <div className='help'><HelpButton>?</HelpButton></div>
      <div className={`flex-center ${style.container}`}>
        <div className={`flex-center ${style.logo}`}><LogoComponent size='550' animate={true} /></div>
        <ProgressBar />
        <div className='flex-center'><Button onClick={HandelOnClick}>Loading</Button></div>
      </div>
    </>
  );
}

export default LoadingScreen;
