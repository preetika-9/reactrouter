import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Learn  from './components/Learn';
import Courses from './components/Courses';
import Bundles from './components/Bundles';
import CourseId from './components/CourseId';

import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/myapps" element={<Navigate replace to="/Learn"/>} />
      <Route path="/learn" element={<Learn/>} >
        <Route path="course" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>} />
        </Route>
        <Route path="bundle" element={<Bundles/>}/>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);










function Dashboard(){
  const location = useLocation()
  return(
    <div>
      <h1>Info that I got here is : {location.state}</h1>
    </div>
  )
}
reportWebVitals();
