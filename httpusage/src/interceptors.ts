/** DON'T DO THIS. NEVER modify window */

//const _fetch = window.fetch
const {fetch: _fetch} = window

window.fetch = async (...args) => {
    let [resource, config = {}] = args

    // add an 'authorization token' to every request
    config.headers = {...config.headers, 'Authorization': 'great-back-token'}

    const response = await _fetch(resource, config)
    return response
}