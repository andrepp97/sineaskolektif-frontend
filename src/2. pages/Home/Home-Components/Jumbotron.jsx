import React from "react";
import JumboBG from '../../../3. assets/img/jumbotron.svg';
// import { MDBJumbotron, MDBContainer, MDBBtn } from "mdbreact";

const JumbotronPage = () => {
    return (
        // <MDBJumbotron className='jumbotron-container' style={{height:'100vh'}}>
        //     <MDBContainer className='text-center white-text'>
        //         <h1 className='mb-5 h1-responsive'>
        //             Bikin Impresi, Bukan Frustasi
        //         </h1>
        //         <MDBBtn color='indigo' className='jumbotron-btn rounded-pill px-5 py-3'>
        //             Buat Campaign
        //         </MDBBtn>
        //     </MDBContainer>
        // </MDBJumbotron>

        <div id="jumbotron">
            <div className="container d-flex h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 order-md-last mt-4 mt-md-0">
                        <img src={JumboBG} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 py-5 order-md-first">
                        <div className="vertical-center">
                            <h2 className="h2-responsive text-center text-md-left mb-4" style={{ color:'#3F51B5' }}>
                                Work Smarter, Not Harder
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab sit eaque exercitationem dicta iste dolorem incidunt ratione corrupti.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JumbotronPage;