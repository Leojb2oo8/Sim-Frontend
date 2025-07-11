import style from "./helpButton.module.scss"
export const HelpButton = ({ children }) => 
    <div className={`${style.btn}`}>{children}</div>