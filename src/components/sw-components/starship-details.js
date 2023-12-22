import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Ülgi" />
            <Record field="length" label="Uzyndığı" />
            <Record field="costInCredits" label="Quny" />
            <Record field="manufacturer" label="Öndiruşi" />
            <Record field="passengers" label="Jolauşylar" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)
