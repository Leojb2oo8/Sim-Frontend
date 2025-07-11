
import { Button } from '../../components/button/button';
import { HelpButton } from '../../components/help-button/helpButton';
import { LogoComponent } from '../../components/imgs/logo';
import style from './MainMenu.module.scss';

const MainMenu=() =>{
  return (
    <>
    <div className='help'><HelpButton>?</HelpButton></div>
    <div className={`flex-center ${style.container}`}>
      <div className={`flex-center ${style.logo}`}><LogoComponent size='550' animate={true}/></div>
      <div className='flex-center'><Button>Start</Button></div>
    </div>
    </>
  );
}

export default MainMenu;
