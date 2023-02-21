import React from 'react';
import '../Css/Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  if (props.IsSearch){
    //search top 5 recent bands from bd
  }
  return (
    <>
    <div className='cards'>
      <h1>{props.IsSearch ? 'Search results:':'Check out these upcoming artists!'}</h1>
      <div className='cards__container'>
      { !props.IsSearch ?
            (
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                <CardItem
                src='mariachis.jpg'
                description='Reggaeton hasta abajo al estilo unico ranchero de los cartuchos.'
                label='Reggaeton'
                path='/artistPage/1'
                bandname = 'los cartuchos volados'
                />
                <CardItem
                src='mariachis.jpg'
                description='Reggaeton hasta abajo al estilo unico ranchero de los cartuchos.'
                label='Reggaeton'
                path='/artistPage/1'
                bandname = 'los cartuchos volados'
                />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='mariachis.jpg'
              description='Reggaeton hasta abajo al estilo unico ranchero de los cartuchos.'
              label='los cartuchos volados'
              path='/artistPage/1'
              bandname = 'los cartuchos volados'
            />
            <CardItem
              src='mariachis.jpg'
              description='Reggaeton hasta abajo al estilo unico ranchero de los cartuchos.'
              label='Reggaeton'
              path='/artistPage/1'
              bandname = 'los cartuchos volados'
            />
            <CardItem
              src='mariachis.jpg'
              description='Reggaeton hasta abajo al estilo unico ranchero de los cartuchos.'
              label='Reggaeton'
              path='/artistPage/1'
              bandname = 'los cartuchos volados'
            />
          </ul> </div>):
          (<div className='cards__wrapper'>
          <ul className='cards__items'>
          {props.listOfBands.map(data => (
          <CardItem
                      bandname={data.bandname} 
                      description={data.description}
                      label={data.genre}
                      src={data.img} 
                      path={`/artistPage/${data.Id}`}
          />
          ))}
      </ul></div>)
}
        
      </div>
    </div>
    </>
  );
}
export default Cards;