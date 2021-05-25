import SearchResultCard from "./SearchResultCard";
import Container from 'react-bootstrap/Container';

function SearchResults(props){
  const {results} = props;
  if(results.length === 0){
    return (<p>Nothing to show...</p>);
  }
  else {
    return (
      <>
        {results.map(item => {
          return (
            <Container >  
                <SearchResultCard item={item} key={item.id}/>   
            </Container>
          )
        })}
        {/* <pre>{JSON.stringify(results, null, 4)}</pre> */}
      </>
    );
  }
}

export default SearchResults;