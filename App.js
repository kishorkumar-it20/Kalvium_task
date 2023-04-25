import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainavbar from './components/Learning/Main_navbar/Mainnavbar';
import Learning from './components/Learning/Learning';
import Course from './components/enroll/Course';
import Test from './components/MCQ/Test';
import Platform from './components/Codeplatform/Platform';

function App() {
  return (
    <div>
      <Router>
      <Mainavbar/>
      <Routes>
        <Route exact path="/" element={<Learning/>}>
        </Route>
        <Route path="/Learningpage" element={<Learning/>} > 
        </Route>
        <Route path='/Enroll' element={<Course/>}>
        </Route>
        <Route path='/Test' element={<Test/>}>
        </Route>
        <Route path='/Platform' element={<Platform/>}>
        </Route>
      </Routes>
    </Router>      
    </div>
  );
}

export default App;
