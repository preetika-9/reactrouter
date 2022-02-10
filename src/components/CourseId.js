import {Link, useParams, useNavigate} from 'react-router-dom'

function CourseId(){
    const navigate = useNavigate()
    const {courseid} = useParams();
    return(
      <div>
        <h1>URL Params is: {courseid} </h1>
        <button 
        onClick={() => {
          navigate("/dashboard", {state: courseid});
        }} 
        className='btn btn-warning'>Price</button>
        <Link to="/dashboard" state={"Django"}>Test Link</Link>
      </div>
    );
  }

  export default CourseId