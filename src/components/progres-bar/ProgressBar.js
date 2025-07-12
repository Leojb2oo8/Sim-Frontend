import { Progress } from 'antd';
import { colors } from '../../utils/Constants';
import style from './ProgressBar.module.scss'

export const ProgressBar = ({ percentage }) =>
    <div className={`flex-center ${style.container}`}>
        <Progress
            percent={percentage}
            showInfo={false}
            size={[1200, 20]}
            strokeColor={colors.Green3}
            trailColor={colors.Green2} />
    </div>