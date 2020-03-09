import React from 'react';

const Loader = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight:'33vh' }}>
            <div className="spinner-grow text-primary mx-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success mx-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger mx-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;