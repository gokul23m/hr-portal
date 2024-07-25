
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm';
import TeamLeader from './Containers/TeamLeader/TeamLeader';
import AddJob from './Containers/TeamLeader/AddJob';
import Interview from './Containers/Interview/Interview';
import SetMarksModal from './Containers/Interview/SetMarksModal';
import Profile from './Components/Profile';
import { GlobalProvider } from './AppContext';
import HR from './Containers/HR/HR';
// import ProjectManager from './Containers/ProjectManager/ProjectManager';
import WorkBench from './Containers/ProjectManager/WorkBench';
import Home from './Components/Home';
import Career from './Containers/Career/Career';
import ForgetPassword from './Components/ForgetPassword';
import ProjectManager from './Containers/ProjectManager/ProjectManager';
import ChangePassword from './Components/ChangePassword';
import ApplyJob from './Containers/Candidate/ApplyJob';

function App() {
  return (
        <GlobalProvider>
          <div className="App">
          <Router>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/loginForm' Component={LoginForm}/>
                <Route path='/forgetPassword' Component={ForgetPassword}/>
                {/* <Route path='/changePassword' Component={ChangePassword}/> */}
                <Route path='/profile' Component={Profile}/>
                 <Route path='/teamLeader' Component={TeamLeader}/>
                 <Route path='/addJob' Component={AddJob}/>
                 <Route path='/interview' Component={Interview}/>
                 <Route path='/hr' Component={HR}/>
                 <Route path='/projectManager' Component={ProjectManager}/>
                 <Route path='/workBench' Component={WorkBench}/>
                 <Route path='/career' Component={Career}/>
                 <Route path='/applyJob' Component={ApplyJob}/>
              </Routes>
              {/* <LoginForm/> */}
          </Router>
       
    </div>
        </GlobalProvider>
  );
}

export default App;
