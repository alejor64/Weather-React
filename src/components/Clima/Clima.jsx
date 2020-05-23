import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({result}) => {

    const {name, main} = result

    if(!name) return null

    const temp = Math.round(main.temp - 273)
    const tempMax = Math.round(main.temp_max - 273)
    const tempMin = Math.round(main.temp_min - 273)

    return (
        <div className="card-panel whit col s12">
            <div className="black-text">
                <h2>Weather of {name} is:</h2>
                <p className="temperatura">
                    {temp}°C
                </p>
                <p>
                    Max: {tempMax}°C
                </p>
                <p>
                    Min: {tempMin}°C
                </p>
            </div>
        </div>
    )
}

Clima.propTypes ={
    result: PropTypes.object.isRequired
}

export default Clima
