import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context'
import './Albums.css'


function Albums() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([])
  const currentUser = useContext(MyContext);

  useEffect(() => {
    getAlbums(currentUser);
  }, [currentUser]);



  const getAlbums = async (user) => {
    const id = user.currentUser.id

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    const albums = await response.json();

    setAlbums(albums);
  };



  const showPhotos = (albumId) => {
    navigate(`/photos/?albums=${albumId}`);
  }
  return (



    <div className="main" key={Math.random()}>
      {albums.map((albums) => (
        <div key={Math.random()} className="albums" >
          <div className="albums-Container">
            <p id={albums.id} onClick={() => showPhotos(albums.id)} >{albums.title} </p>
          </div>
        </div>
      )
      )
      }
    </div>

  )
}

export default Albums

