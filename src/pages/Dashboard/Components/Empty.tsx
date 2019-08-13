import React, { useState, useEffect } from 'react';
import { Empty } from 'antd'





const empty: React.FC = () => {

    return (
        <Empty style={{ color: '#dafef9' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    )
}

export default empty;
