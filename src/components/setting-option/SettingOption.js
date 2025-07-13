import { Slider } from 'antd';
import { colors, sizeValue, variantValue } from '../../utils/Constants';
import style from './SettingOption.module.scss'
import { Button } from '../button/Button';
import { useState } from 'react';
import { Input } from "../input/Input"

export const SettingOption = ({ title = "Setting", name, min = 0, max = 100, step = 1, value = min, onChage }) => {

    const [currentValue, setCurrentValue] = useState(value);

    const handleOnClickMin = () => {
        const newValue = currentValue - step;

        if (newValue >= min) {
            setCurrentValue(newValue);
            onChage({ [name]: newValue })
        }
        else {
            setCurrentValue(min);
            onChage({ [name]: min })
        }
    }

    const handleOnClickMax = () => {
        const newValue = currentValue + step;

        if (newValue <= max) {
            setCurrentValue(newValue);
            onChage({ [name]: newValue })
        }
        else {
            setCurrentValue(max);
            onChage({ [name]: max })
        }
    }

    const handleOnChage = (value) => {
        setCurrentValue(value);
        onChage({ [name]: value })
    }
    const handleOnChangeInput = (event) => {
        const value = Number(event.currentTarget.value);

        if (Number.isInteger(value) &&
            value >= min &&
            value <= max &&
            value !== currentValue
        ) {
            setCurrentValue(value);
            onChage({ [name]: value })
        }
    }

    return <div className={`flex-center ${style.container}`}>
        <div className={style.sliderTitle}>
            <Button variant={variantValue.secondary} size={sizeValue.small}>{title}</Button>
        </div>

        <div className={style.sliderContainer}>
            <div>
                <Slider
                    className={style.slider}
                    value={currentValue}
                    min={min}
                    max={max}
                    onChange={handleOnChage}
                    step={step}

                    tooltip={{ formatter: null }}

                    styles={{
                        track: { background: colors.Green3, height: 14, borderRadius: 20 },
                        rail: { background: colors.Gray, height: 14, borderRadius: 20 },
                    }} />
            </div>
            <div className={`flex-center ${style.sliderButtonsContainer}`}>
                <div><Button onClick={handleOnClickMin} size={sizeValue.rounded}>-</Button></div>
                <div><Input onChange={handleOnChangeInput} value={currentValue} /></div>
                <div><Button onClick={handleOnClickMax} size={sizeValue.rounded}>+</Button></div>
            </div>

        </div>

    </div>
}