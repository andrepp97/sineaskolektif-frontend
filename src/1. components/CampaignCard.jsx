import React from 'react';
import moment from 'moment';
import { MDBIcon, MDBProgress } from 'mdbreact';
import { urlAPI } from '../5. helper/database';

const CampaignCard = ({data}) => {
    return (
        <div className="card campaign-card">

            <img
                className="img-fluid card-img-top"
                src={urlAPI + data.image}
                alt={data.title}
            />

            <div className="card-body text-left">
                <p className="h5-responsive campaign-title">
                    {data.title}
                </p>
                <span>
                    {data.description}
                </span>
            </div>

            <div className="card-footer pb-0">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <MDBIcon far icon="user-circle" />
                            <small className="font-weight-bold ml-1">
                                {data.username}
                            </small>
                        </div>
                        <div className="d-flex align-items-center">
                            <MDBIcon far icon="clock" />
                            <small className="font-weight-bold ml-1" style={{ fontSize:'11px' }}>
                                ends {moment(data.end_date, "YYYYMMDD").fromNow()}
                            </small>
                        </div>
                    </div>
                </div>

                <MDBProgress value={0} className="mt-3 mb-1" />
                <p><b>0%</b> Tercapai</p>
            </div>
        </div>
    );
};

export default CampaignCard;