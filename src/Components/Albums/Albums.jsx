import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context'
import './Albums.css'
import axios from "axios";
import Header from "../Header/Header";

const Albums = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([])
  const currentUser = useContext(MyContext);

  useEffect(() => {
    getAlbums(currentUser);
  }, [currentUser]);

  const getAlbums = async (user) => {
    const id = user.currentUser.id;
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      const albums = response.data;
      setAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };

  const showPhotos = (albumId) => {
    navigate(`/photos/?albums=${albumId}`);
  }
  return (
    <div>
      <Header title={<p>Albums</p>} />
      <div className="main" >
        {albums.map((albums, index) => (
          <div key={index} className="albums" >
            <div className="albums-Container">
              <p id={albums.id} onClick={() => showPhotos(albums.id)} >{albums.title} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Albums

