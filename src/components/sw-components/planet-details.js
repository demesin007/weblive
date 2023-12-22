import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Xalyq" />
            <Record field="rotationPeriod" label="Aynalu kezeñi" />
            <Record field="diameter" label="Dïametri" />
            <Record field="climate" label="Klïmat" />
            <Record field="terrain" label="Jer bederi" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails)
