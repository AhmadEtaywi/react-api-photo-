import React ,{ useEffect, useState,createContext } from "react";
// import Photos from '../Photos/Photos'

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export const UserContext = createContext(currentUser);


function Albums(){
    
    const [albums,setAlbums]=useState([])
    // console.log(albums);
    const [error, setError] = useState(null);
    
 

useEffect(() => {
getAlbums(currentUser);
    // eslint-disable-next-line
},[]);

    const getAlbums = (user) => {
        const { id } = user;
    
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
          .then((Response) => Response.json())
          .then((albums) => {
            //   console.log(albums1);
            setAlbums(albums);
          })
          .catch((error) => {
            setError(error);
          });
      };
      if (error) {
        return <p>An error occurred: {error.message}</p>;
      }
    // const getAlbums = async (user) => {
    //     const { id } = user;
      
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    //     const albums = await response.json();
      
    //     setAlbums(albums);
    //   };
    return(
      <UserContext.Provider value={currentUser}>

        <>

        {/* <UserContext.Provider value={currentUser}>
          <Photos />  
        </UserContext.Provider> */}
        {albums.map((albums)=>(
               <div >
            <p key={Math.random()} id={albums.id} >{albums.title}</p>
           
        </div>
        
        ))
}</>
</UserContext.Provider>

)
}

export default Albums