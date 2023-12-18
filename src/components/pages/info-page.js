import React from "react";
import './info-page.css';
import intro from './IMG_20230402_201546_267.jpg'; // Use a relative import

const InfoPage = () => {
    return (
        <div className="info-container">
            <div className="info-content">
                <div className="info-item-photo">
                    <img src={intro} alt="intro"/>
                </div>
                <div className="info-item">
                    <p><strong>Name:</strong> Nurkanat</p>
                    <p><strong>Surname:</strong> Demessin</p>
                    <p><strong>Number:</strong> 87054568425</p>
                    <p><strong>Email:</strong> demessin007@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default InfoPage;
