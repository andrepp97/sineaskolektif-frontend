import React, { Component } from 'react';
import { MDBAnimation, MDBBtn, MDBIcon } from 'mdbreact';

class PageNotFound extends Component {
    render() {
        return (
            <div className="d-flex align-items-center bg-dark border-bottom" style={{height:'100vh'}}>
                <div className="col-md-6 offset-md-3 text-white text-center">
                    <MDBAnimation type="bounce" infinite>
                        <h1>4 0 4</h1>
                    </MDBAnimation>
                    <h3 className='h3-responsive border rounded mx-sm-5 my-5 p-4'>
                        Halaman Tidak Ditemukan
                    </h3>
                    <MDBBtn color="indigo" className="rounded-pill py-2 px-4" href="/">
                        <MDBIcon icon="arrow-left" />
                        <span className="ml-2">Kembali ke Website</span>
                    </MDBBtn>
                </div>
            </div>
        );
    }
}

export default PageNotFound;