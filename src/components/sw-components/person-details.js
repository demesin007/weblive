import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Jynys" />
            <Record field="eyeColor" label="Köz tüsi" />
            <Record field="height" label="Bïiktigi" />
            <Record field="birthYear" label="Tuğan jyl" />
            <Record field="homeworld" label="Otany" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)
