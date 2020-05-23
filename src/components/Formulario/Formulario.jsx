import React, {useState} from 'react'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

const Formulario = ({search, setSearch, setCallAPI}) => {

    const [error, setError] = useState(false)

    const {city, country} = search

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!city.trim() || !country.trim()){
            setError(true)
            return
        }
        setError(false)
        setCallAPI(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                error && <Error msn="All files are Required"/>
            }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select Country --</option>
                    <option value="US">USA</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>
            <div>
                <button 
                    type="submit"
                    className="waves-effect waves-light btn-large col s12 amber accent-3"
                >Seacrh <i className="material-icons right">cloud</i></button>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setCallAPI: PropTypes.func.isRequired
}

export default Formulario
