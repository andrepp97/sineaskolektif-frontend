import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"


const Footer = () => {
    return (
        <MDBFooter className="font-small bg-dark pt-5">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6" className='my-3'>
                        <h5 className="title">ABOUT SINEAS KOLEKTIF</h5>
                        <ul className='list-group'>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>FAQ</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Contact Us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Terms and Conditions</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6" className='my-3'>
                        <h5 className="title">FOLLOW US</h5>
                        <div className='list-inline'>
                            <li className='list-inline-item'>
                                <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="instagram" size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item ml-2">
                                <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="facebook" size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item ml-2">
                                <a href="https://github.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="github" size="2x" />
                                </a>
                            </li>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="text-center py-5">
                <MDBContainer className='border-top border-bottom w-100 py-3'>
                    &copy; 2020 Copyright by
                    <span className="opacity-90 ml-1">SINEAS KOLEKTIF</span>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}


export default (Footer);