
import { Header } from '../../components/header/Header';
import { page } from '../../App';
import { Button } from '../../components/button/button';
import style from './SettingsScreen.module.scss';

const SettingsScreen = ({ OnChagePage }) => {
  const HandelOnClick = () => {
    OnChagePage(page.loadingScreen)
  }
  return (
    <>
      <Header titleValue={"Settings"}/>
      <div className={`container`}></div>
      <div className={style.buttonContainer}>
        <div><Button onClick={HandelOnClick}>Default</Button></div>
        <div><Button onClick={HandelOnClick}>Run</Button></div>
      </div>
    </>
  );
}

export default SettingsScreen;
