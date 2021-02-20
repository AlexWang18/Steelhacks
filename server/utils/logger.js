const info = (...args) => { //rest syntax collect elements into an array
    console.log(...args)
}

const error = (...args) => {
    console.log(...args)
}

module.exports = {
    info, 
    error
}