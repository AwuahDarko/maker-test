/* eslint-disable */
import VueSimpleAlert from "vue-simple-alert";
import router from "../router";


export class Network {
    // baseUrl = 'http://localhost:3000/';

    constructor(baseUrl = process.env.VUE_APP_SERVER_LINK) {
        this.baseUrl = baseUrl;
    }

    makeGETRequest(url) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'source': 'frontend'
            },
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    const status = res.status;
                    const json = await res.json();
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    if (data.status === 401 || data.status === 403) {
                        const msg = 'Your session has expired, please login again!'
                        VueSimpleAlert.alert(msg).then(() => {
                            router.replace('/')
                        })
                        reject(msg);
                        return
                    }
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makeGETRequest2(url) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'source': 'frontend'
            },
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    const status = res.status;
                    const json = await res.json();
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makePOSTRequest(url, body) {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };


        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {

                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    if (data.status === 401 || data.status === 403) {
                        const msg = 'Your session has expired, please login again!'
                        VueSimpleAlert.alert(msg).then(() => {
                            router.replace('/')
                        })
                        reject(msg);
                        return
                    }
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makePOSTRequest2(url, body) {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };


        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {

                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makePUTRequest(url, body) {
        const options = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    if (data.status === 401 || data.status === 403) {
                        const msg = 'Your session has expired, please login again!'
                        VueSimpleAlert.alert(msg).then(() => {
                            router.replace('/')
                        })
                        reject(msg);
                        return
                    }
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makePATCHRequest(url, body) {
        const options = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    if (data.status === 401 || data.status === 403) {
                        const msg = 'Your session has expired, please login again!'
                        VueSimpleAlert.alert(msg).then(() => {
                            router.replace('/')
                        })
                        reject(msg);
                        return
                    }
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    makeDELETERequest(url) {
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'source': 'frontend'
            },
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {

                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    if (data.status === 401 || data.status === 403) {
                        const msg = 'Your session has expired, please login again!'
                        VueSimpleAlert.alert(msg).then(() => {
                            router.replace('/')
                        })
                        reject(msg);
                        return
                    }
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}


export const network = new Network();
