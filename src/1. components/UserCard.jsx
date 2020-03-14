import React from 'react';
import { MDBIcon } from 'mdbreact';

const UserCard = ({ user }) => {
    return (
        <div className="card card-detail pl-4 pr-3 py-2">
            <span className="opacity-80">Campaigner</span>
            <div className="d-flex align-items-center mt-3 mb-1">
                <MDBIcon far icon="user-circle" size="lg" />
                <small className="font-weight-bold ml-2">
                    {user.username}
                </small>
            </div>
        </div>
    );
};

export default UserCard;