
import { page } from '../../App';
import { Button } from '../../components/button/button';
import { HelpButton } from '../../components/help-button/helpButton';
import { LogoComponent } from '../../components/imgs/logo';
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
        <div className='flex-center'><Button onClick={HandelOnClick}>Loading</Button></div>
      </div>
    </>
  );
}

export default LoadingScreen;
