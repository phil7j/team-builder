import React from 'react';
import TeamMember from './TeamMember';
function TeamList(props) {
    return (
        <div>
            {props.team.map( member => <TeamMember data={member} setMemberToEdit={props.setMemberToEdit} setIsUpdating={props.setIsUpdating}/>)}
        </div>
    )
}

export default TeamList
