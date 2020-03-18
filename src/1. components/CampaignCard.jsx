import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MDBIcon, MDBProgress } from 'mdbreact';
import { urlAPI } from '../5. helper/database';

const CampaignCard = ({data}) => {
    return (
        <div className="col-md-6 col-lg-4" style={{marginBottom:'2rem'}}>
            <Link to={`/campaign/${data.id}`} className="card campaign-card">

                <img
                    className="img-fluid card-img-top"
                    style={{ height: '225px' }}
                    src={urlAPI + data.image}
                    alt={data.title}
                />

                <div className="card-body p-3 text-left">
                    <h5 className="h5-responsive campaign-title">
                        {data.title}
                    </h5>
                    <small>
                        {
                            data.description.length > 105
                            ?
                                `${data.description.slice(0,105)}...`
                            :
                                data.description
                        }
                    </small>
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
                    <p className="text-center"><b>0%</b> Tercapai</p>
                </div>
            </Link>
        </div>
    );
};

export default CampaignCard;