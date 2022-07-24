const url = 'http://localhost:8080/userRestService'
const headers = {
    'Accept' : 'application/json, text/plain, */*',
    'Content-Type' : 'application/json'
};

export function validate (user) {
    return fetch (url + '/validateUser', {
        method : 'POST',
        headers,
        body: JSON.stringify(user)
    }).then (result => result.json())
}

export function  create (user) {
    return fetch (url + '/createUser', {
        method : 'POST',
        headers,
        body: JSON.stringify(user)
    }).then (result => result.json())
}