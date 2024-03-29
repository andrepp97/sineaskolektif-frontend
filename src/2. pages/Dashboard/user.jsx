import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Default from '../../3. assets/img/userDefault.png';

const User = (props) => {
    return (
        <div className="row" style={{ paddingTop: '30px' }}>

            <div className="col-sm-4 col-lg-2 px-4 d-flex align-items-center">
                <img
                    className="img-fluid img-thumbnail rounded-circle shadow-sm"
                    src={Default}
                    alt="USER"
                />
            </div>

            <div className="col-sm-8 col-lg-7 d-flex align-items-center">
                <div>
                    <h3 className="h3-responsive">{props.username}</h3>
                    <small style={{ color: '#606060' }}>
                        Bergabung sejak <strong>{moment(props.created).format('LL')}</strong>
                    </small>
                </div>
            </div>

            <div className="col-lg-3 d-flex flex-column justify-content-around mt-3 mt-lg-0">
                <Link to='/buat-campaign' className="btn btn-indigo btn-block">
                    Buat Campaign
                </Link>
                <Link to='/buat-polling' className="btn btn-outline-elegant btn-block">
                    Buat Polling
                </Link>
            </div>

        </div>
    );
};

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps)(User);