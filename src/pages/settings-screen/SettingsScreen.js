
import { Header } from '../../components/header/Header';
import { page, variantValue } from '../../utils/Constants';
import { Button } from '../../components/button/Button';
import style from './SettingsScreen.module.scss';
import { SettingOption } from '../../components/setting-option/SettingOption';
import { useEffect, useState } from 'react';

const SettingsScreen = ({ OnChagePage }) => {
  const [settings, setSettings] = useState({})

  const HandelOnClick = () => {
    OnChagePage(page.loadingScreen)
  }
  const handleOnChangeOption = (value) => {
    setSettings({ ...settings, ...value })
  }
  useEffect(() => {
    console.log(settings);
  }, [settings])

  return (
    <>
      <Header titleValue={"Settings"} />

      <div className={style.settingOptionContainerParent}>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
        <div className={style.settingOptionContainerChild}>
          <SettingOption title='Settings' name="setting" onChage={handleOnChangeOption} />
          <SettingOption title='Settings2' name="setting2" onChage={handleOnChangeOption} />
        </div>
      </div>

      <div className={style.buttonContainer}>
        <div><Button variant={variantValue.secondary} onClick={HandelOnClick}>Default</Button></div>
        <div><Button variant={variantValue.secondary} onClick={HandelOnClick}>Run</Button></div>
      </div>
    </>
  );
}

export default SettingsScreen;
