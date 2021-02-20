
const baseUrl = `/api/pdf/`

const getResume = async (filename) => {
    try {
        const res = await fetch(baseUrl+filename)
        const blob = await res.blob() // we use fetch here so that we can use the blob method to convert to file
        return blob;
    }
    catch (err){
        console.log(err)
    }
}


export default getResume;