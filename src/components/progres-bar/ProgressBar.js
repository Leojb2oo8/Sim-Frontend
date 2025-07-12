import { Flex, Progress } from 'antd';
import { colors } from '../../utils/Constants';
import style from './ProgressBar.modules.scss'

export const ProgressBar = () =>
    <div className={`flex-center ${style.container}`}>
        <Progress percent={50} showInfo={false} size={[800, 20]} strokeColor={colors.Green3} trailColor={colors.Green2}/>
    </div>