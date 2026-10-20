import axios from "axios";

const UNSPLACE_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {query, page, per_page },
    headers: {Authorization: `Client-ID ${UNSPLACE_KEY}` },
  });
  return response.data
}



export async function fetchVideos(query, per_page = 20){
const response =await axios.get('https://api.pexels.com/v1/videos/search',{
    params:{query, per_page},
    headers:{Authorization: PEXELS_KEY},
})
return response.data
}

export async function fetchGIF(query,page = 1, per_page = 20){
  const response = await axios.get(`https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search`,{
    params:{q: query, page, per_page}
  })

  return response.data

}



// const ddata = async () =>{
//   const data = await fetchPhotos("car")
//   console.log(data)
// }

// ddata()
