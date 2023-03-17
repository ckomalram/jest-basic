const cities = ['Panama' , 'Arraijan', 'Chorrera', 'San Miguelito'];

const randomCity = () => {
    const city = cities[Math.floor(Math.random() * cities.length)]

    return city;
}

const HolaMundo = () => {
    const city = cities[Math.floor(Math.random() * cities.length)]
    return city;
}

module.exports = randomCity;