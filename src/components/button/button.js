import style from "./button.module.scss"
export const Button = ({ children }) => 
    <div className={`${style.btn}`}>{children}</div>