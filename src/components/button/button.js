import style from "./Button.module.scss"
import { sizeValue, variantValue } from "../../utils/Constants"

export const Button = ({ children, onClick, variant = variantValue.primary, size = sizeValue.medium }) =>{
    let variantClass = ""
    let sizeClass = ""

    switch (variant) {
        case variantValue.secondary:
            variantClass = style.btnSec
            break;

        default:
            variantClass = style.btnPri
            break;
    }
    // variant === variantValue.primary ? style.btnPri : style.btnSec

    switch (size) {
        case sizeValue.rounded:
            sizeClass = style.rounded
            break;

        case sizeValue.xSmall:
            sizeClass = style.xSmall
            break;

        case sizeValue.small:
            sizeClass = style.small
            break;

        case sizeValue.large:
            sizeClass = style.large
            break;

        default:
            sizeClass = style.medium
            break;
    }
    // size === sizeValue.rounded ? style.rounded: size === sizeValue.xSmall ? style.xSmall: size === sizeValue.small ? style.small: size === sizeValue.medium ? style.medium: size.large


    return  <div onClick={onClick} className={`${style.btn} ${sizeClass} ${variantClass}`}>{children}</div>
}