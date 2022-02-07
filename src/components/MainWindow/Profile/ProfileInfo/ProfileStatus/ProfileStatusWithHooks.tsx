import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
            </div>}
            {editMode &&
            <div>
                <input
                    onChange={e => onStatusChange(e)}
                    autoFocus
                    value={status}
                    onBlur={deactivateEditMode}
                />
            </div>}
        </div>
    );
};
