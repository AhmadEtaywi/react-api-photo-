import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context'
import './Albums.css'


function Albums({key}) {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([])
  console.log(albums);
  const currentUser = useContext(MyContext);

  useEffect(() => {
    getAlbums(currentUser);
    // eslint-disable-next-line
  }, [currentUser]);



  const getAlbums = async (user) => {
      // const {id1}  = user;
      const id=user.currentUser.id
      console.log("user",user);
      console.log("user",user.currentUser.id);
      // console.log("id",id1.currentUser.id);
      // const test2=currentUser

      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      const albums = await response.json();
      console.log(response);
    console.log(albums, "zzz");
      setAlbums(albums);
    };

  

  const showPhotos = (albumId) => {
    navigate(`/photos/?albums=${albumId}`);
  }
  return (

    <div className="main" key={key}>
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

