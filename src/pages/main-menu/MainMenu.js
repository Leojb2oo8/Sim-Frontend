
import { page } from '../../utils/Constants';
import { Button } from '../../components/button/Button';
import { HelpButton } from '../../components/help-button/HelpButton';
import { LogoImgComponent } from '../../components/imgs/Logo';
import style from './MainMenu.module.scss';

const MainMenu=({OnChagePage}) =>{
  const HandelOnClick=() =>{
    OnChagePage(page.settingsScreen)
  }
  return (
    <>
    <div className='help'><HelpButton>?</HelpButton></div>
    <div className={`flex-center ${style.container}`}>
      <div className={`flex-center ${style.logo}`}><LogoImgComponent size='550' animate={true}/></div>
      <div className='flex-center'><Button onClick={HandelOnClick}>Start</Button></div>
    </div>
    </>
  );
}

export default MainMenu;
