
import { Header } from '../../components/header/Header';
import { page, variantValue } from '../../utils/Constants';
import { Button } from '../../components/button/Button';
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
        <div><Button variant={variantValue.secondary} onClick={HandelOnClick}>Default</Button></div>
        <div><Button variant={variantValue.secondary} onClick={HandelOnClick}>Run</Button></div>
      </div>
    </>
  );
}

export default SettingsScreen;
