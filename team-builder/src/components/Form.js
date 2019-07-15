import React, {useState, useEffect} from 'react'

let idCounter = () => {
    let id = 0;
    return function countUp() {
        return id++
    }
}
const idUp = idCounter();

function Form(props) {
    const [formData, setFormData] = useState({name: '', email: '', role: ''})
    const ChangeHandler = e => {
        setFormData({ ...formData,
                [e.target.name]: e.target.value})
                console.log(formData)
    }
    const addMember = e => {
        e.preventDefault()
        if(!props.isUpdating){
            props.setTeam([ ...props.team, {...formData, id: idUp()}])
        } else if(props.isUpdating) {
            const updatedList = props.team.filter( member => member.id !== formData.id);
            updatedList.push(formData);
            props.setTeam(updatedList);
        }
        props.setIsUpdating(false);
        setFormData({name: '', email: '', role: ''})
      }

     useEffect( ()=> {
         setFormData(props.memberToEdit)
    }, [props.memberToEdit])

    return (
        <div>
            <form onSubmit={addMember}>
                <input onChange={ChangeHandler} name="name" value={formData.name} placeholder="Name"/>
                <input onChange={ChangeHandler} name="email" value={formData.email} placeholder="E-Mail"/>
                <input onChange={ChangeHandler} name="role" value={formData.role} placeholder="Job Role"/>
                <button type='submit'>{!props.isUpdating ? "Add Team Member" : "Update Team Member" }</button>
                {/* CLEAR BUTTON FINISH LATER */}
                {/* {props.isUpdating ? <button onClick={}>Clear</button> : <></>} */}
            </form>
        </div>
    )
}

export default Form
