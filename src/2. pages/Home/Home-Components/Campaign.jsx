import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

// IMPORT COMPONENTS
import CampaignCard from '../../../1. components/CampaignCard';
// IMPORT COMPONENTS

class Campaign extends Component {
    state = {
        campaignData: [
            {
                title: "Joker",
                image: "https://image.tmdb.org/t/p/w500_and_h282_face/kpASaQqllVNxqaxJQp3hcxJab1A.jpg",
                desc: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                user: "Mr. Children",
                remaining: 16,
                progress: 78
            },
            {
                title: "Ip Man 4",
                image: "https://image.tmdb.org/t/p/w500_and_h282_face/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",
                desc: "Following the death of his wife, Ip Man travels to San Francisco to ease tensions between the local kung fu masters and his star student, Bruce Lee, while searching for a better future for his son.",
                user: "Baskoro",
                remaining: 6,
                progress: 89
            },
            {
                title: "Spider Man - Homecoming",
                image: "https://image.tmdb.org/t/p/w500_and_h282_face/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
                desc: "Peter Parker with the help of Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
                user: "Yo Ming",
                remaining: 11,
                progress: 92
            }
        ]
    }

    // REDER CAMPAIGN //
    renderCampaignData = () => {
        return this.state.campaignData.map((val,idx) => {
            return <CampaignCard data={val} key={idx} />
        })
    }
    // REDER CAMPAIGN //

    render() {
        return (
            <div className='container-fluid text-center py-5'>

                <div className="col-md-6 offset-md-3 justify-content-center">
                    <h2 className="h2-responsive">CAMPAIGN TERBARU</h2>
                    <p className='opacity-80'>Yuk Temukan Kolaborasi Menarik Disini</p>
                </div>

                <div className="row my-4 justify-content-center">
                    {this.renderCampaignData()}
                </div>

                <MDBBtn outline color="indigo" className="rounded-pill mb-4">
                    LIHAT SEMUA
                </MDBBtn>

            </div>
        );
    }
}

export default Campaign;