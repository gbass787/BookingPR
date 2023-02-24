import React from 'react';
import { useState } from 'react';
import Instructions from '../Instructions';
import '../../Css/SearchArtist.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Cards from '../Cards';

export default function SearchArtist() {
   
  //Get data from db
  let data = [{   bandname: "los cartuchos volados",
                  description:"Reggaeton hasta abajo",
                  img:"mariachis.jpg",
                  Id: 1,
                  genre:"Reggaeton",
                  region:"South",
                  bandtype: "Band"
                },
              {                
                  bandname: "PeosMojados",
                  description:"Peos ASMR live", 
                  img:"PeosMojados.jpg",
                  Id:2,
                  genre:"Electronic",
                  region:"North",
                  bandtype: "Instrumental"
                },
                {                
                  bandname: "OnePiece",
                  description:"literal one piece", 
                  img:"download.jpg",
                  Id: 4,
                  genre:"Reggaeton",
                  region:"East",
                  bandtype: "Singer"
                }];

    const [newFilteredData, setNewFilteredData] = useState([...data]);
    const [open, setOpen] = useState();
    const [numberOfRows, setNumberOfRows] = useState(2);
    const numberOfColumns = 3;

    const [bandname, setBandName] = useState('');
    const [genre, setGenre] = useState('');
    const [region, setRegion] = useState('');
    const [bandtype, setBandType] = useState('');

    function inputBandname(event){
      setBandName(event.target.value);
    }
    function inputGenre(event){
      setGenre(event.target.value);
    }

    function inputRegion(event){
      setRegion(event.target.value);
    }

    function inputBandType(event){
      setBandType(event.target.value);
    }

    function SetColandRows(counter){
      setNumberOfRows(Math.ceil(counter/3));
    }

    function handleSearch(){
      var New = [...data];
      
      if(bandname.trim().length !== 0){
        New = New.filter(band => band.bandname.toLocaleLowerCase().trim().includes(bandname.toLocaleLowerCase().trim()));
      }
      if(genre.length !== 0){
        New = New.filter(band => band.genre === genre);
      }

      if(region.length !== 0){
        New = New.filter(band => band.region === region);
      }

      if(bandtype.length !== 0){
        New = New.filter(band => band.bandtype === bandtype);
      }
      setNewFilteredData([...New]);  

      SetColandRows(newFilteredData.length);
    };

    function handleClear(){
      setBandName('');
      setNewFilteredData(data);
      setGenre('');
      setBandType('');
      setRegion('');
    };

    return (
      <>
        <div >
          <div>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Search Bands
            </Button>
            </div>
            
            <Collapse in={open}>
              <Form className='SA_search' >
                <Row className="align-items-center">
                  <Col sm={6} className="my-1">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Band name:</Form.Label>
                      <Form.Control onChange={inputBandname} value={bandname} placeholder="Search by Band name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                <Col sm={3} className="my-1">
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Genre</Form.Label>
                      <Form.Select value={genre} onChange={inputGenre} defaultValue="Choose Genre...">
                        <option value=''>Choose Genre...</option>
                        <option value='Pop'>Pop</option>
                        <option value='Rock'>Rock</option>
                        <option value='Cultural'>Cultural</option>
                        <option value='Electronic'>Electronic</option>
                        <option value='Gospel'>Gospel</option>
                        <option value='Metal'>Metal</option>
                        <option value='Reggaeton'>Reggaeton</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={3} className="my-1">
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Region</Form.Label>
                      <Form.Select value={region} onChange={inputRegion} defaultValue="Select Region...">
                        <option value={''}>Select Region...</option>
                        <option value={'North'}>North</option>
                        <option value={'West'}>West</option>
                        <option value={'South'}>South</option>
                        <option value={'East'}>East</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={3} className="my-1">
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>BandType</Form.Label>
                      <Form.Select value={bandtype} onChange={inputBandType} defaultValue="Choose Band type...">
                        <option value={''}>Choose Band type...</option>
                        <option value={'Singer'}>Singer</option>
                        <option value={'Band'}>Band</option>
                        <option value={'Instrumental'}>Instrumental</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button onClick={handleClear} variant="outline-secondary">
                  Clear Filters
                </Button>
                <Button onClick={handleSearch} variant="outline-primary">
                  Search
                </Button>
              </Form>
            </Collapse>
            <hr/>
            <Cards listOfBands={newFilteredData} IsSearch={true}/>
        </div>
        </>
    );
}

