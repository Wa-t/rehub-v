import React from 'react';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.index_container}>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
