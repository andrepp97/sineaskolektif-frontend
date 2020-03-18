import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBCol, MDBBtn } from 'mdbreact';
import ImageHome from '../../../3. assets/img/home-1.svg';

// MAIN COMPONENT
const StartNow = (props) => {
    const handleStartNow = () => {
        if (props.isLogin) {
            window.scrollTo(0,0)
        } else {
            window.location.pathname = '/login'
        }
    }

    return (
        <MDBContainer className='py-5'>
            <div className="row text-center">

                <MDBCol md="6" className='p-4'>
                    <h2 className='h2-responsive'>
                        Realisasikan Karya Terbaikmu Sekarang
                    </h2>
                    <p className='opacity-80'>
                        Wujudkan ide dan karyamu dengan kolaborasi, di mana pencipta dan penikmat saling dukung dan berinteraksi
                    </p>
                    <MDBBtn
                        color="indigo"
                        className='rounded-pill'
                        onClick={handleStartNow}
                    >
                        Mulai Sekarang
                    </MDBBtn>
                </MDBCol>

                <MDBCol md="6">
                    <img
                        src={ImageHome}
                        alt="KOLABORASI"
                        className='img-fluid'
                    />
                </MDBCol>

            </div>
        </MDBContainer>
    );
};

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps)(StartNow);