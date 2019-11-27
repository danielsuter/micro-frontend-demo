import React, {useContext} from 'react';
import {EventContext, Styled} from 'direflow-component';
import {propTypes} from './componentProperties';
import styles from './App.css';

const App = (props) => {
    const dispatch = useContext(EventContext);

    const handleClick = () => {
        const event = new CustomEvent('broadcast', {
            detail: {
                message: 'React says hi'
            },
        });
        dispatch(event);
    };

    return (
        <Styled styles={styles}>
            <div className='app'>
                {props.event}
                <div className='header-title'>React Component</div>
                <button className='button' onClick={handleClick}>
                    Let's go!
                </button>
            </div>
        </Styled>
    );
};

App.propTypes = propTypes;

export default App;
