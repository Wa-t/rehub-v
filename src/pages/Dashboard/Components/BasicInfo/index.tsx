import React, { useState, useEffect } from 'react';
import Chart from '@/components/Chart';
import { IChartProps } from '../../interface';
import defaultOption from '../DefaultOption';
import Empty from '../Empty';
import styles from './index.less';



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
    // console.log(option)
    if (JSON.stringify(option) === '{}') {
        return <Empty />;
    }
    return (
        // <Chart option={chartOption} />

        <div className={styles.container}>
            <div className="info">
                <img className={styles.avatar} src={option.avatar_url} alt={option.login} />
                <div className={styles.info_row}>
                    <a
                        href={`https://github.com/${option.login}`}
                        target="_blank"
                    >
                        <i className="iconfont" style={{ color: '#dafef9' }} >&#xe606;</i>
                    </a>

                    <a
                        href={`https://github.com/${option.login}?tab=repositories`}
                        target="_blank"
                    >
                        <i className="iconfont" style={{ color: '#dafef9', marginLeft: 20 }} >&#xe6e9;</i>
                        {option.public_repos}
                    </a>
                    <a
                        href={`https://github.com/${option.login}?tab=repositories`}
                        target="_blank"
                    >
                        <i className="iconfont" style={{ marginLeft: 20 }} >&#xe63e;</i>
                        {option.public_repos}
                    </a>
                    <i className="iconfont" style={{ color: '#dafef9', marginLeft: 20 }} >&#xe65c;{option.following}</i>
                </div>
                <div className={styles.info_row}>
                    <i className="iconfont" style={{ color: '#dafef9' }} >&#xe622;{option.followers}</i>
                    <a href={option.blog} target="_blank">
                        <i className="iconfont" style={{ marginLeft: 20 }} >&#xe632;</i>
                    </a>

                </div>
                <div className={styles.info_row}>
                    <i className="iconfont" style={{ color: '#dafef9' }} >&#xe623;{option.created_at.slice(0, 10)}</i>
                </div>


            </div>

        </div>
    )
}

export default BasciInfo;
