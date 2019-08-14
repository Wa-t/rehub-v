import React, { useState, useEffect } from 'react';
import Chart from '@/components/Chart';
import request from '@/utils/request';
import { IChartProps } from '../../interface';
import defaultOption from '../DefaultOption';
import Empty from '../Empty';
// import styles from './index.less';



const Language: React.FC<IChartProps> = ({
    currentUser
}) => {
    const [lang, setLang] = useState([]);
    // console.log(repos, 'repos')

    useEffect(() => {
        request({
            url: currentUser.repos_url,
            method: 'get'
        }).then(res => {
            const languages = {}
            res.map((repo: any) => {
                const { language } = repo
                if (language in languages) {
                    languages[language] += 1
                } else if (language !== null) {
                    languages[language] = 1
                }
            })
            console.log('languages')
            setLang(languages)
        })
    }, [])
    if (JSON.stringify(currentUser) === '{}') {
        return <Empty />;
    }
    const chartOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            bottom: 5,
        },
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data: Object.keys(lang).map(key => ({
                    value: lang[key],
                    name: key
                })),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return (
        <Chart option={chartOption} />
    )
}

export default Language;
