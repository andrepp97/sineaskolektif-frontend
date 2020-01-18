import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

// IMPORT COMPONENTS
import CampaignCard from '../../../1. components/CampaignCard';
// IMPORT COMPONENTS

class Campaign extends Component {
    state = {
        campaignData: []
    }

    render() {
        return (
            <div className='container-fluid text-center py-5 border-bottom'>
                <div className="col-md-6 offset-md-3 justify-content-center">
                    <h2 className="h2-responsive">CAMPAIGN TERBARU</h2>
                    <p className='opacity-80'>Yuk Temukan Kolaborasi Menarik Disini</p>
                </div>
                <div className="row my-4 justify-content-center">
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                </div>
                <MDBBtn outline color="indigo" className="rounded-pill">
                    LIHAT SEMUA
                </MDBBtn>
            </div>
        );
    }
}

export default Campaign;