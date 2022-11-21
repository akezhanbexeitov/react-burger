const checkResponse = (response) => {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject(`Ошибка ${response.status}`)
}

const request = (url, options) => {
    return fetch(url, options).then(checkResponse)
}

export default request
