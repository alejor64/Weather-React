import React from 'react'
import PropTypes from 'prop-types'

const Error = ({msn}) => {
    return (
        <p className="red darken-4 error">{msn}</p>
    )
}

Error.propTypes = {
    msn: PropTypes.string.isRequired
}

export default Error
