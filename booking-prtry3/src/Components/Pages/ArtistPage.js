import React from 'react';
import Image from 'react-bootstrap/Image';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ArtistPage() {
 
    //get data
      let { id } = useParams();
      const navigate =useNavigate();
      if(!parseInt(id)){
        navigate('/');
      }

      //replace with db call for getting data with id 
      /*-----------------------------------------------------------------------------*/
      let bands = [{   bandname: "los cartuchos volados",
          description:"Reggaeton hasta abajo al estilo ranchero",
          img:"mariachis.jpg",
          Id: 1,
          genre:"Reggaeton",
          region:"South",
          bandtype: "Band"
        },
      {                
          bandname: "grim addiction",
          description:"grim live", 
          img:"PeosMojados.jpg",
          Id:2,
          genre:"Metal",
          region:"North",
          bandtype: "Band",
          bandInformation: "A band from Aguadilla Puerto Rico since 2016",
          email: "loschangos@gmail.com"
        },
        {                
          bandname: "OnePiece",
          description:"literal One Piece", 
          img:"download.jpg",
          Id: 4,
          genre:"Reggaeton",
          region:"East",
          bandtype: "Singer"
        }];
    /*-----------------------------------------------------------------------------*/

    const data = bands.find(x => x.Id === parseInt(id));
    return (
      <>
      { data 
        ? <div>

          <h2>{data.bandname}</h2>
          <Image src={require(`../../Images/${data.img}`)}></Image>
          <div><label>Band Description:</label><p>{data.description}</p></div>
          <div><label>Genre:</label><p>{data.genre}</p></div>
          <div><label>Region:</label><p>{data.region}</p></div>
          <div><label>Band Type:</label><p>{data.bandtype}</p></div>
          <div><label>Band Information:</label><p>{data.bandInformation}</p></div>
          <div><label>Contact Us:</label><p>{data.email}</p></div>
        </div>
        : <div>nothing</div>
      }</>
    );
  }
