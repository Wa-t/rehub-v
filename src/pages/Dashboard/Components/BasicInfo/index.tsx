import React, { useState, useEffect } from 'react';
import Chart from '@/components/Chart';
import { IChartProps } from '../../interface';
// import defaultcurrentUser from '../DefaultcurrentUser';
import Empty from '../Empty';
import styles from './index.less';



const BasciInfo: React.FC<IChartProps> = ({
    currentUser
}) => {
    if (JSON.stringify(currentUser) === '{}') {
        return <Empty />;
    }
    return (
        <div className={styles.container}>
            <div className="info">
                <img className={styles.avatar} src={currentUser.avatar_url} alt={currentUser.login} />
                <div className={styles.info_row}>
                    <a
                        href={currentUser.html_url}
                        target="_blank"
                    >
                        <i className="iconfont" >&#xe606;</i>
                    </a>

                    <a
                        href={`https://github.com/${currentUser.login}?tab=repositories`}
                        target="_blank"
                        style={{ marginLeft: 20 }}
                    >
                        <i className="iconfont">&#xe6e9;</i>
                        {currentUser.public_repos}
                    </a>
                    <a
                        href={`https://github.com/${currentUser.login}?tab=repositories`}
                        target="_blank"
                        style={{ marginLeft: 20 }}
                    >
                        <i className="iconfont" >&#xe63e;</i>
                        {currentUser.public_repos}
                    </a>
                    <i className="iconfont" style={{ marginLeft: 20 }} >&#xe65c;{currentUser.following}</i>
                </div>
                <div className={styles.info_row}>
                    <i className="iconfont" >&#xe622;{currentUser.followers}</i>
                    <a href={currentUser.blog} target="_blank" style={{ marginLeft: 20 }} >
                        <i className="iconfont">&#xe632;</i>
                    </a>
                    <i className="iconfont" style={{ marginLeft: 20 }} >&#xe600;{currentUser.location}</i>
                </div>
                <div className={styles.info_row}>
                    <i className="iconfont" >&#xe623;{currentUser.created_at.slice(0, 10)}</i>
                </div>


            </div>

        </div>
    )
}

export default BasciInfo;
