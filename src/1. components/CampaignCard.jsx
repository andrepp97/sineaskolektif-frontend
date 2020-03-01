import React from 'react';
import { MDBIcon, MDBProgress } from 'mdbreact';
import { urlAPI } from '../5. helper/database';

// MOMENT
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

const CampaignCard = ({data}) => {
    return (
        <div className="card campaign-card">

            <img
                className="img-fluid card-img-top"
                src={urlAPI + data.image}
                alt={data.title}
            />

            <div className="card-body text-left">
                <h5 className="h5-responsive campaign-title">
                    {data.title}
                </h5>
                <span className="font-small">
                    {data.description}
                </span>
            </div>

            <div className="card-footer pb-0">

                <div className="d-flex align-items-center mb-2">
                    <MDBIcon far icon="user-circle" />
                    <small className="font-weight-bold ml-1" style={{ fontSize: '11px' }}>
                        {data.username}
                    </small>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <MDBIcon far icon="clock" />
                    <small className="font-weight-bold ml-1" style={{ fontSize: '11px' }}>
                        berakhir {moment(data.end_date, "YYYYMMDD").fromNow()}
                    </small>
                </div>

                <MDBProgress value={0} className="mt-3 mb-1" />
                <p><b>0%</b> Tercapai</p>
            </div>
        </div>
    );
};

export default CampaignCard;