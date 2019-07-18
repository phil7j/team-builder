import React from 'react'

function TeamMember(props) {
    const submitter = ()=> {
        props.setMemberToEdit(props.data);
        props.setIsUpdating(true);

    }
    return (


        <div>
            <h3>{props.data.name}</h3>
            <h3>{props.data.email}</h3>
            <h3>{props.data.role}</h3>
            <button onClick={submitter}>Update</button>
            <hr />
        </div>
    )
}

export default TeamMember
