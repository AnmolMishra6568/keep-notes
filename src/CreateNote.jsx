import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [note, setNote] = useState({ title: "", content: "", })

    const InputEvent = (event) => {

        //   const value = event.target.value;
        //   const name = event.target.name;

        const { name, value } = event.target

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "", content: "",
        })
    }

    return <>
        <div className="main_note">
            <form>
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="title" autoComplete="off" />
                <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} placeholder="Write a note...">
                </textarea>
                <Button onClick={addEvent}><AddIcon className="plus_sign" /></Button>
            </form>

        </div>
    </>;

};

export default CreateNote;
