
import { Link, Outlet} from 'react-router-dom';
function Learn(){
    return(
      <div>
        <h1>Learn</h1>
        <h4>All courser are listed here</h4>
        <Link className='btn btn-success' to="/learn/course">Courses</Link>{""}|
        <Link className='btn btn-primary' to="/learn/bundle">Bundle</Link>
        <Outlet/>
      </div>
    )
  }

  export default Learn