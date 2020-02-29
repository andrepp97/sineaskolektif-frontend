import React from 'react';
import Spinner from './spinner.svg';

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight:'100vh' }}>
            <img src={Spinner} alt=""/>
        </div>
    );
};

export default Loading;