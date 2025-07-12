import style from "./Button.module.scss"
import { sizeValue, variantValue } from "../../utils/Constants"

export const Button = ({ children, onClick, variant = variantValue.primary, size = sizeValue.medium }) =>
    <div onClick={onClick} className={`${style.btn} ${size === sizeValue.small? style.small: size === sizeValue.medium? style.medium: size.large} ${variant === variantValue.primary? style.btnPri : style.btnSec}`}>{children}</div>
