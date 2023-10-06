import React, {FC, FormEvent, useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null)
    // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAdd(ref.current!.value);
        ref.current!.value = '';

        // setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field mt2">
                <input
                    // value={title}
                    type="text"
                    id='title'
                    placeholder='Введите название дела'
                    ref={ref}
                />
                <label htmlFor="title" className='active'>
                    Введите название дела
                </label>
            </div>
        </form>

    );
}

export default TodoForm;