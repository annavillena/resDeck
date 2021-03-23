import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
    useEffect(() => {
        props.Logout();
    }, []);

    return <Redirect to="/Home" />
};

export default Logout;