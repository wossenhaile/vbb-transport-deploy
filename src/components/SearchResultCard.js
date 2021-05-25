import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SearchResultCard(props){
  const {item} = props;
  return (
    <Card>
      <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              <span className="stopDetailLabel">
                Type: 
              </span>
              <span className="stopDetailValue">
                {item?.type}
              </span>
            </p>
            <p>
              <span className="stopDetailLabel">
                Latitude: 
              </span>
              <span className="stopDetailValue">
                {item?.location?.latitude}
              </span>
            </p>
            <p>
              <span className="stopDetailLabel">
                Longitude: 
              </span>
              <span className="stopDetailValue">
                {item?.location?.longitude}
              </span>
            </p>
          </Card.Text>
          <Link to={`/stop_details/${item.id}`}>
            <Button variant="primary">Stop Details</Button>
          </Link>
        </Card.Body>
    </Card>
  )
}

export default SearchResultCard;