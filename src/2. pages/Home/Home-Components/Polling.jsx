import React from 'react';
import { Link } from 'react-router-dom';
import PollingCard from '../../../1. components/PollingCard';

const renderPollingData = (data) => {
    return data.map((val, idx) => {
        return <PollingCard data={val} key={idx} />
    })
}

const Polling = ({ data }) => {
    return (
        <div className='container text-center py-5'>

            <div className="col-md-6 offset-md-3 justify-content-center">
                <h2 className="h2-responsive">POLLING TERBARU</h2>
                <p className='opacity-90'>Polling-polling baru yang menanti dukunganmu</p>
            </div>

            {
                data.length
                    ?
                    <>
                        <div className="row justify-content-center my-4">
                            {renderPollingData(data)}
                        </div>
                        <Link to='/polling' className="btn btn-outline-indigo font-weight-bold rounded mb-4">
                            LIHAT SEMUA
                        </Link>
                    </>
                    :
                    <div className="container">
                        <div className="alert alert-danger py-4">
                            <h4 className="h4-responsive my-auto">Belum Ada Polling</h4>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Polling;