import style from "./Button.module.scss"
export const Button = ({ children, onClick}) => 
    <div onClick={onClick} className={`${style.btn}`}>{children}</div>