// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImage = async () => {
  try {
    const apiKey = '9nx7gvrNeP0EOYfORzMI9ajuEZ2DhRs9'
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    )
    const { data } = await resp.json()

    const { url } = data.images.original

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );

    return url
  } catch (error) {
    // manejo del error
    // console.error(error)
    return 'Image does not exist'
  }
}

// getImagen();
