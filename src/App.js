import { useState } from 'react';
import MainMenu from './pages/main-menu/MainMenu';
import SettingsScreen from './pages/settings-screen/SettingsScreen';
import LoadingScreen from './pages/loading-screen/LoadingScreen';
import DataScreen from './pages/data-screen/DataScreen';
import { page } from './utils/Constants';

const GetPage=({value, OnChagePage}) => {
  switch (value) {
    case page.mainMenu:
      return <MainMenu OnChagePage={OnChagePage}/>
    case page.settingsScreen:
      return <SettingsScreen OnChagePage={OnChagePage}/>
    case page.loadingScreen:
      return <LoadingScreen OnChagePage={OnChagePage}/>
    case page.dataScreen:
      return <DataScreen OnChagePage={OnChagePage}/>
  }
}

const App=() => {
  const [screen,setScreen] = useState(page.mainMenu);

  const HandleChageScreen = value => {
    setScreen(value)
  }

  return (
    <div>
      <GetPage value={screen} OnChagePage={HandleChageScreen}/>
    </div>
  );
}

export default App;
