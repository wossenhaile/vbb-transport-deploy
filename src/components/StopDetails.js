import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function StopDetails(props){
  const [stopData, setStopData] = useState("Not loaded...");
  const { id } = useParams();

  useEffect(() => {
      let url = `https://v5.vbb.transport.rest/stops/${id}`;
      fetch(url).then(response => response.json())
                .then(data => setStopData(data));
      },
      [id]);

  const availableModes = [];
  for(const mode in stopData?.products){
    if(mode){
      availableModes.push(mode);
    }
  }

  const nextStops = stopData?.stops?.map((stop, idx) => (
    <div className="nextStop">
      <p>
        <span className="stopDetailLabel">
          Stop {idx + 1}: 
        </span>
        <span className="stopDetailValue">
          {stop?.name}
        </span>
      </p>
      <p>
        <span className="stopDetailLabel">
          Latitude: 
        </span>
        <span className="stopDetailValue">
          {stop?.location?.latitude}
        </span>
      </p>
      <p>
        <span className="stopDetailLabel">
          Longitude: 
        </span>
        <span className="stopDetailValue">
          {stop?.location?.longitude}
        </span>
      </p>
    </div>
  ));

  

  return (
    <Card>
      <Card.Header>{stopData.name}</Card.Header>
      <Card.Body>
      <Card.Text>
            <p>
              <span className="stopDetailLabel">
                Type: 
              </span>
              <span className="stopDetailValue">
                {stopData?.type}
              </span>
            </p>
            <p>
              <span className="stopDetailLabel">
                Latitude: 
              </span>
              <span className="stopDetailValue">
                {stopData?.location?.latitude}
              </span>
            </p>
            <p>
              <span className="stopDetailLabel">
                Longitude: 
              </span>
              <span className="stopDetailValue">
                {stopData?.location?.longitude}
              </span>
            </p>
            <p>
              <span className="stopDetailLabel">
                Available Modes of transport: 
              </span>
              <span className="stopDetailValue">
                { availableModes.map(item => (
                  <span className="transportMode">{item}</span>
                )) }
              </span>
            </p>
            <p className="nextStops">
              <span className="stopDetailLabel">
                Next Stops: 
              </span>
              <div className="nextStopsContainer">
                { nextStops }
              </div>
            </p>
          </Card.Text>
        {/* <div><pre>{JSON.stringify(stopData, null, 4) }</pre></div> */}
        <Link to="/">
          <Button className="pull-right" variant="primary">Back</Button>
        </Link>
      </Card.Body>
  </Card>
  )
}

export default StopDetails;