import { LogoImgComponent } from "../imgs/Logo"
import { HelpButton } from "../help-button/HelpButton"
import style from "./Header.module.scss"

export const Header = ({titleValue}) =>
    <div className={`flex-center ${style.container}`}>
        <div className='help'><HelpButton>?</HelpButton></div>
        <div className={`flex-center ${style.logo}`}><LogoImgComponent size='175' animate={true} /></div>
        <div className={`${style.titleText}`}>{titleValue}</div>
    </div>