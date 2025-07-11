import style from "./button.module.scss"
export const Button = ({ children, onClick}) => 
    <div onClick={onClick} className={`${style.btn}`}>{children}</div>