
import { page } from '../../App';
import { Button } from '../../components/button/button';
import { Header } from '../../components/header/Header';
import style from './DataScreen.module.scss';

const DataScreen=({OnChagePage}) =>{
  const HandelOnClick=() =>{
    OnChagePage(page.mainManu)
  }
  return (
    <>
      <Header titleValue={"Graphs"}/>
      <div className={`container`}></div>
      <div className={style.buttonContainer}>
        <div><Button onClick={HandelOnClick}>Default</Button></div>
        <div><Button onClick={HandelOnClick}>Run</Button></div>
      </div>
    </>
  );
}

export default DataScreen;
