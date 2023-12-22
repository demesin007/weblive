import React from "react";
import './info-page.css';
import intro from './IMG_20230402_201546_267.jpg';

const InfoPage = () => {
    return (
        <div className="info-container">
            <div className="info-content">
                <div className="info-item-photo">
                    <img src={intro} alt="intro"/>
                </div>
                <div className="info-item">
                    <table>
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Nurkanat</td>
                        </tr>
                        <tr>
                            <td>Surname:</td>
                            <td>Demessin</td>
                        </tr>
                        <tr>
                            <td>Number:</td>
                            <td>87054568425</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>demessin007@gmail.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
