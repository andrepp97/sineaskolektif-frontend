import React from 'react';
import { MDBIcon, MDBProgress  } from 'mdbreact';

const CampaignCard = () => {
    return (
        // <div className="col-lg-4 my-3">
            <div className="card campaign-card">
                <img
                    className="img-fluid card-img-top"
                    src="https://image.tmdb.org/t/p/w500_and_h282_face/4J2W2NZfI8HNhfNNTd99uGqaTb.jpg"
                    alt="gambar1"
                />
                <div className="card-body text-left">
                    <p className="h5-responsive campaign-title">
                        Avengers - Infinity War
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa quibusdam, veritatis dolore aliquam quos, voluptate minima optio provident nihil accusantium?
                    </p>
                    <div className="row">
                        <div className="col-6">
                            Yoming
                        </div>
                        <div className="col-6 text-right">
                            <MDBIcon far icon="clock" /> 7 hari lagi
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <MDBProgress value={60} className="my-2" />
                    <p><b>60%</b> Tercapai</p>
                </div>
            </div>
        // </div>
    );
};

export default CampaignCard;