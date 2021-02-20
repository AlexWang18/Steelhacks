const axios = require('axios');

const baseUrl = `/api/`

const getResume = async (filename) => {
    try {
        const res = await fetch(baseUrl+'pdf/'+filename)
        const blob = await res.blob() // we use fetch here so that we can use the blob method to convert to file
        return blob;
    }
    catch (err){
        console.log(err)
    }
}

const getInfo = async () => {
    const res = await axios.get(baseUrl+'/info')
    console.log(res)
    return res.data
}

export{ getResume, getInfo } 
