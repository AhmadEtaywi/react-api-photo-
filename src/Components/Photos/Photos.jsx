import React,{useState,useEffect} from 'react';
import './Photos.css'
import axios from 'axios';
import Header from '../Header/Header';

const Photos = () =>{

    const albumsId = new URLSearchParams(window.location.search).get("albums");
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${albumsId}/photos`)
  .then((response) => {
    setPhotos(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
      }, [albumsId]);
      
    return(
        <div>
            <Header title={<p>Photos</p>}/>
        <div className='photos-main'>
            {photos.map((album,index)=>(
                
                <div className='container' key={index}>
                    <p className='photos-title'>{album.title}</p>
                    <img alt="" src={photos[index].thumbnailUrl}></img>
                </div>
            ))}
        </div>
            </div>
    )
}
export default Photos