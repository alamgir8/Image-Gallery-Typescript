import React, { useEffect, useState } from 'react';
import ImageCard from './Components/ImageCard';
import SearchImage from './Components/SearchImage';


export type imageType = {
  id : number;
  webformatURL : string;
  user : string;
  views : number;
  downloads : number;
  likes : number;
  comments : number;
  tags : string;
 
}




const App = () => {
  const [images, setImages] = useState([] as imageType[]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
 
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(error => setError(error))
  }, [term])
   
 
if(isLoading) return  <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>;
if(error) return <h1 className="text-6xl text-center mx-auto mt-32">Something Went Wrong!</h1>;

  return (
    <div className="container mx-auto">
      <SearchImage searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Image Found!</h1>}
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div>
    </div>
  );
}

export default App;
