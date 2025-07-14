import { colors } from "../../utils/Constants"
export const AddImgComponent = ({ className, size='50'}) => {

    return <svg className={className} width={size} height={size}>
        <path d="M18 11h-12c-1.104 0-2 0.896-2 2s0.896 2 2 2h12c1.104 0 2-0.896 2-2s-0.896-2-2-2z" fill={colors.Green5} />
    </svg>
}

