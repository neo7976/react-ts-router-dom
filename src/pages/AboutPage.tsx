import React, {FC} from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt ipsa maiores
                quae. Minus non pariatur quisquam, sunt ullam voluptatibus.</p>
            <button className='bnt' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    );
}