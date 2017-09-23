/* eslint-env browser */

const TokenService = {
    save(token) {
        console.log(token);
        window.localStorage.setItem('authToken', token);
    },
    read() {
        return window.localStorage.getItem('authToken');
    },
};

export default TokenService;