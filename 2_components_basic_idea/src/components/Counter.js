import { useState } from 'react';

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill';
        case 3:
            return 'Triple Kill';
        case 4:
            return 'Godlike';
        case 5:
            return 'Unstoppable';
        default:
            return 'Counter';
    }
};

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const increaseButton = () => {
        setCounter((oldCounter) => oldCounter + 1);
    };

    const decreaseButton = () => {
        setCounter((oldCounter) => oldCounter - 1);
    };

    const clearButton = () => {
        setCounter(0);
    };

    return (
        <div>
            <p style={{ fontSize: Math.max(counter, 1) + 10 + 'px' }}>
                {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
            </p>
            {counter < 10 ? <button onClick={increaseButton}>Increase</button> : null}
            <button onClick={decreaseButton}>Decrease</button>
            {props.canReset && <button onClick={clearButton}>Clear</button>}
        </div>
    );
};

export default Counter;
