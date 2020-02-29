import React from 'react';
import { MDBBtn } from 'mdbreact';
import CampaignCard from '../../../1. components/CampaignCard';

const renderCampaignData = (data) => {
    return data.map((val, idx) => {
        return <CampaignCard data={val} key={idx} />
    })
}

const Campaign = ({data}) => {
    return (
        <div className='container-fluid text-center py-5'>

            <div className="col-md-6 offset-md-3 justify-content-center">
                <h2 className="h2-responsive">CAMPAIGN TERBARU</h2>
                <p className='opacity-80'>Yuk Temukan Kolaborasi Menarik Disini</p>
            </div>

            <div className="row my-4 justify-content-center">
                {
                    data.length
                    ?
                        renderCampaignData(data)
                    :
                        <div className="alert alert-danger w-responsive py-4 mx-3">
                            <h4 className="h4-responsive my-auto">Belum Ada Campaign</h4>
                        </div>
                }
            </div>

            <MDBBtn outline color="indigo" className="rounded-pill mb-4">
                LIHAT SEMUA
            </MDBBtn>

        </div>
    );
};

export default Campaign;