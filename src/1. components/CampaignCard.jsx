import React from 'react';
import { MDBIcon, MDBProgress  } from 'mdbreact';

const CampaignCard = ({data}) => {
    return (
        <div className="card campaign-card">

            <img
                className="img-fluid card-img-top"
                src={data.image}
                alt={data.title}
            />

            <div className="card-body text-left">
                <p className="h5-responsive campaign-title">
                    {data.title}
                </p>
                <span>
                    {data.desc}
                </span>
            </div>

            <div className="card-footer">
                <div className="row">
                    <div className="col-6 text-left">
                        <MDBIcon far icon="user-circle" /> <small className="font-weight-bold">{data.user}</small>
                    </div>
                    <div className="col-6 text-right">
                        <MDBIcon far icon="clock" /> <small>{data.remaining} hari lagi</small>
                    </div>
                </div>

                <MDBProgress value={data.progress} className="mt-3 mb-1" />
                <p><b>{data.progress}%</b> Tercapai</p>
            </div>
        </div>
    );
};

export default CampaignCard;