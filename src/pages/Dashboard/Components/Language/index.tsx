import React, { useState, useEffect } from 'react';
import Chart from '@/components/Chart';
import request from '@/utils/request';
import { IChartProps } from '../../interface';
import defaultOption from '../DefaultOption';
import Empty from '../Empty';
// import styles from './index.less';

interface Languages {
    [prop: string]: number
}

const Language: React.FC<IChartProps> = ({
    currentUser
}) => {
    const [lang, setLang] = useState({});

    useEffect(() => {
        request({
            url: currentUser.repos_url,
            method: 'get'
        }).then((res: any) => {
            const languages: Languages = {}
            res.map((repo: any) => {
                const { language } = repo
                if (language in languages) {
                    languages[language] += 1
                } else if (language !== null) {
                    languages[language] = 1
                }
            })
            setLang(languages)
        })
    }, [])
    if (JSON.stringify(currentUser) === '{}') {
        return <Empty />;
    }
    const chartOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            confine: true
        },
        legend: {
            type: 'scroll',
            bottom: 5,
            textStyle: {
                color: '#dafef9',
            }
        },
        color: ['#997300', '#5b9bd5', '#ed7d31', '#70ad47', '#4472c4', '#9e480e', '#636363'],
        series: [
            {
                name: '语言',
                type: 'pie',
                radius: '50%', // 饼图大小
                center: ['50%', '50%'],
                data: Object.keys(lang).map(key => ({
                    value: lang[key],
                    name: key
                })),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: '#ccc'
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
