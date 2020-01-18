import React from "react";
import { MDBJumbotron, MDBContainer, MDBBtn } from "mdbreact";

const JumbotronPage = () => {
    return (
        <MDBJumbotron className='jumbotron-container' style={{height:'100vh'}}>
            <MDBContainer className='text-center white-text'>
                <h1 className='mb-5 h1-responsive'>
                    Bikin Impresi, Bukan Frustasi
                </h1>
                <MDBBtn color='indigo' className='jumbotron-btn rounded-pill px-5 py-3'>
                    Buat Campaign
                </MDBBtn>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default JumbotronPage;