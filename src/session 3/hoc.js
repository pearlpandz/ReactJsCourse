import React from 'react'

export default (WrappedComponent) => {

    const hocComponent = ({ ...props }) => <WrappedComponent {...props} isLoggedIn={true} />

    hocComponent.propTypes = {}

    return hocComponent
}
