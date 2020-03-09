import React from 'react';
import moment from 'moment';
import { MDBIcon } from 'mdbreact';
import { urlAPI } from '../5. helper/database';

const PollingCard = ({ data }) => {
    return (
        <div className="card campaign-card">

            <img
                className="img-fluid card-img-top"
                src={urlAPI + data.image}
                alt={data.polling_title}
            />

            <div className="card-body text-left">
                <h5 className="h5-responsive campaign-title">
                    {data.polling_title}
                </h5>
                <span className="font-small">
                    {data.polling_desc}
                </span>
            </div>

            <div className="card-footer">

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
            </div>
        </div>
    );
};

export default PollingCard;