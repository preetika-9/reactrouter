import { Outlet, NavLink} from 'react-router-dom'

function Courses(){
    const courseList = ["React", "Angular", "Vue", "Nodejs"]
    const randomCourseName = courseList[Math.floor(Math.random()* courseList.length)]
    return(
      <div>
        <h1>Courses list</h1>
        <h4>COurses card</h4>
  
        <p>More test</p>
        <NavLink 
        style={({isActive}) => {
          return {
          backgroundColor: isActive ? "pink" : "yellow"
        }
        } }
        to={`/learn/course/${randomCourseName}`}>{randomCourseName}
          
        </NavLink>
  
        <NavLink className="btn btn-light" to={`/learn/course/tests`}>tests</NavLink>
  
  
        <Outlet/>
      </div>
    )
  }
   export default Courses