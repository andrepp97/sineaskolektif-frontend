import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JumboBG from '../../../3. assets/img/jumbotron.svg';

const JumbotronPage = (props) => {
    return (
        <div id="jumbotron" className="animated fadeIn">
            <div className="container d-flex h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 order-md-last mt-5 mt-md-0">
                        <img src={JumboBG} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 py-5 order-md-first">
                        {
                            props.username
                            ?
                                <div className="text-center">
                                    <Link to='/buat-campaign' className="btn btn-indigo">
                                        Buat Campaign
                                    </Link>
                                    <Link to='/buat-polling' className="btn btn-outline-elegant">
                                        Buat Polling
                                    </Link>
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore aperiam dolores error, in amet quaerat natus ab vero voluptates consequuntur.
                                    </p>
                                </div>
                            :
                                <div>
                                    <h2 className="h2-responsive text-center text-md-left mb-4" style={{ color:'#3F51B5' }}>
                                        Work Smarter, Not Harder
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab sit eaque exercitationem dicta iste dolorem incidunt ratione corrupti.
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default connect(mapStateToProps)(JumbotronPage);