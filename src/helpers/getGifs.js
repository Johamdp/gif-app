export const getGifs = async(category) => {
    const API_KEY ='eYKG26GmTnFwo0MkkFNt2a684sKJoJFj';
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${15}&offset=0&rating=g&lang=en`;
    
    const resp = await fetch(url);
  
    const {data} = await resp.json();
  
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url,
      }
    })
  
    console.log(gifs);
     return gifs;
  } 