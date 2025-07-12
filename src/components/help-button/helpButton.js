import style from "./HelpButton.module.scss"
export const HelpButton = ({ children }) => 
    <div className={`${style.btn}`}>{children}</div>