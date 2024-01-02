
const api_ongoing = async () => {
  const api_ongoing = `${process.env.NEXT_PUBLIC_API_BASE_URL_ANIME}/ongoing-anime`
  
    const ongoing = await fetch(api_ongoing);
    const ongoing_anime = await ongoing.json();
    // console.log(ongoing_anime.pagination)
    
};

export default api_ongoing;
