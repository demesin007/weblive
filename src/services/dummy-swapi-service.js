export default class DummySwapiService {


    getAllPeople = async () => {
        return this._people
    }

    getPerson = async () => {
        return this._people[0]
    }

    getAllPlanets = async () => {
        return this._planets
    }

    getPlanet = async () => {
        return this._planets[0]
    }

    getAllStarships = async () => {
        return this._starships
    }

    getStarship = async () => {
        return this._starships[0]
    };

    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`
    }

    getStarshipImage = () => {
        return `https://placeimg.com/600/400/tech`
    }

    getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`
    }
}
