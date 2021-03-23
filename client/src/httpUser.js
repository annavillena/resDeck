import axios from 'axios';
import jwtDecode from 'jwt-decode';
import config from "./config";

const httpUser = axios.create();

httpUser.getToken = function() {
    return localStorage.getItem('token');
};

httpUser.setToken = function(token) {
    localStorage.setItem('token', token);
    return token;
};

httpUser.getCurrentUser = function() {
    const token = this.getToken();
    return (token ? jwtDecode(token) : null)
};

httpUser.getUserType = function() {
    return localStorage.getItem('userType');
}

httpUser.logIn = async function(credentials) {
    try {
        const response = await axios.post(config.baseURL + 'api/users/authenticate', credentials);

        const token = response.data.token;
        if(token) {
            this.defaults.headers.common.token = this.setToken(token);
            const user = jwtDecode(token);
            return user;
        } else {
            return false;
        }
    } catch(err) {
        //console.log(err);
        return err;
    }
};

httpUser.signUp = async function(userInfo) {
    try {
        const response = await axios.post(config.baseURL + 'api/users', userInfo);
        if (response.status === 200 && response.data.message == "User successfully created, token attached") {
            return 200;
        }
    } catch(err) {
        console.log(err);
        // if (err.response.status === 400) {
        //     return 400;
        // }
        // else if (err.response.status === 500) {
        //     return 500;
        // }
    }
};

httpUser.editUser = async function(userInfo) {
    try {
        const user = httpUser.getCurrentUser();
        const response = await axios.put(config.baseURL + 'api/users/' + user._id, userInfo);
        if (response.status === 200) {
            return 200;
        }
    } catch(err) {
       //console.log(err);
        return err;
    }
};

httpUser.logOut = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    delete this.defaults.headers.common.token;
    return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
export default httpUser;