import React from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from '../../../1. components/CampaignCard';

const renderCampaignData = (data) => {
    return data.map((val, idx) => {
        return <CampaignCard data={val} key={idx} />
    })
}

const Campaign = ({data}) => {
    return (
        <div className='container text-center py-5'>

            <div className="col-md-6 offset-md-3 justify-content-center">
                <h2 className="h2-responsive">CAMPAIGN TERBARU</h2>
                <p className='opacity-80'>Yuk Temukan Kolaborasi Menarik Disini</p>
            </div>

                {
                    data.length
                    ?
                        <>
                            <div className="row my-4">
                                {renderCampaignData(data)}
                            </div>
                            <Link to='/campaign' className="btn btn-outline-indigo rounded-pill mb-4">
                                LIHAT SEMUA
                            </Link>
                        </>
                    :
                        <div className="container">
                            <div className="alert alert-danger py-4">
                                <h4 className="h4-responsive my-auto">Belum Ada Campaign</h4>
                            </div>
                        </div>
                }

        </div>
    );
};

export default Campaign;