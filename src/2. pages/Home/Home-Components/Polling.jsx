import React from 'react';
import { MDBBtn } from 'mdbreact';
import PollingCard from '../../../1. components/PollingCard';

const renderPollingData = (data) => {
    return data.map((val, idx) => {
        return <PollingCard data={val} key={idx} />
    })
}

const Polling = ({ data }) => {
    return (
        <div className='container-fluid text-center py-5'>

            <div className="col-md-6 offset-md-3 justify-content-center">
                <h2 className="h2-responsive">POLLING TERBARU</h2>
                <p className='opacity-80'>Partisipasi Kamu Itu Berharga</p>
            </div>

            {
                data.length
                    ?
                    <>
                        <div className="row my-4 justify-content-center">
                            {renderPollingData(data)}
                        </div>
                        <MDBBtn outline color="indigo" className="rounded-pill mb-4">
                            LIHAT SEMUA
                        </MDBBtn>
                    </>
                    :
                    <div className="alert alert-danger py-4 mx-3">
                        <h4 className="h4-responsive my-auto">Belum Ada Polling</h4>
                    </div>
            }

        </div>
    );
};

export default Polling;