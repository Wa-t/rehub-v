import React, { useState, useEffect } from 'react';
import Chart from '@/components/Chart';
import { IChartProps } from '../../interface';
import defaultOption from '../DefaultOption';



const BasciInfo: React.FC<IChartProps> = ({
    option
}) => {
    // const [userInfo, setUserInfo] = useState(option)

    // useEffect(() => {
    //     setUserInfo({ ...option })
    // }, [option])
    // console.log(JSON.parse(userInfo))
    // if (!userInfo) {
    //     return '没有获取到用户信息！'
    // }
    return (
        // <Chart option={chartOption} />

        <div className="basic-info-container">
            <div className="basic-info-avatar">
                <img src={option.avatar_url} alt={option.login} />
            </div>

        </div>
    )
}

export default BasciInfo;
