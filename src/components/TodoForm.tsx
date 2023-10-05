import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    //todo Требуется разобраться, так как dep метод для onKeyPress
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAdd(title)
        setTitle('');
    }

    // const keyPressHandler = (event: KeyboardEvent) => {
    //     if (event.key === 'Enter') {
    //         console.log('Нажали enter')
    //     }
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field mt2">
                <input
                    onChange={changeHandler}
                    value={title}
                    type="text"
                    id='title'
                    placeholder='Введите название дела'
                    // onKeyPress={keyPressHandler} //dep
                />
                <label htmlFor="title" className='active'>
                    Введите название дела
                </label>
            </div>
        </form>

    );
}

export default TodoForm;