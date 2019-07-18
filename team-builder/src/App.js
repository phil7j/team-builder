import React, {useState} from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="App">
      <h1>Our Team</h1>
      <hr />
       <TeamList team={team} setMemberToEdit={setMemberToEdit} setIsUpdating={setIsUpdating}/>

      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
    </div>
  );
}

export default App;
