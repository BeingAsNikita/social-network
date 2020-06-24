import React from 'react';
import { useState, useEffect } from 'react';


const ProfileStatusHook = (props) => {

    let [editMode,setEditMode]  = useState(false);
    let [status,setStatus]  = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    
    const activateEditMode = () => {
        setEditMode(true)
      }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status) 
      }

    const changeStatus = (e) => {
        setStatus(e.target.value)
      }

    return (
        <div>
            {
                editMode
                    ? <input value={status}
                        onChange={changeStatus}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                    />
                    : <span onDoubleClick={activateEditMode}>
                        {props.status || 'Write somesing'}
                    </span>
            }

        </div>
    )
}

export default ProfileStatusHook;