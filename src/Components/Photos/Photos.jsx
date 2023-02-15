import React,{useState,useEffect} from 'react';
import './Photos.css'
function Photos(){

    const albumsId = new URLSearchParams(window.location.search).get("albums");
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumsId}/photos`)
          .then((Response) => Response.json())
          .then((photos) => {
            setPhotos(photos);
          });
      }, [albumsId]);
      
    return(
        <div className='photos-main'>
            {photos.map((album,index)=>(

                <div className='container' key={album.id}>
                    <p className='photos-title'>{album.title}</p>
                    <img alt="" src={photos[index].thumbnailUrl}></img>
                </div>
            ))}
        </div>
    )
}
export default Photos