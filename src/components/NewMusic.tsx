import React, { useRef } from 'react'

import style from './Music.module.css';

const NewMusic: React.FC<{onAddMusic: (text: string) => void}> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        
        event.preventDefault();
        const enteredText = inputRef.current!.value;

        if(enteredText.trim().length === 0){
            return
        }
        props.onAddMusic(enteredText);
    }

    return (
        <form className={style.formBox}>
            <label htmlFor='text' className={style.addLabel}>Add Music</label>
            <input type="text" id="text" ref={inputRef}></input>
            <button onClick={submitHandler}>Submit</button>
        </form>
    )

}

export default NewMusic;