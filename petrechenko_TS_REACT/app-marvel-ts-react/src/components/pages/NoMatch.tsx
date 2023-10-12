import { Link } from "react-router-dom";
import { Error } from "../Error/Error";

function NoMatch() {
  return (
  <div> 
    <Error/>
    <h1>404</h1> 
    <h2>Page Not Found</h2>
    <Link to="/">
      <span style={{"color" : "blue", "fontSize": 100}}>Back to the main PAGE</span>
    </Link>
    <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt='404 not found'></img>
  </div>
  );
}

export default NoMatch;