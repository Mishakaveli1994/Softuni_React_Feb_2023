import { useState } from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.start); // One is a valuea and the second is a function that updates the value

    // ! NOT good practice (useEffect is better)
    setTimeout(() => {
        // setSeconds(seconds + 1);
        setSeconds((oldSeconds) => oldSeconds + 1); // This executes twice when React.StrictMode is on for some reason, the
        // above does not
    }, 1000);

    return (
        <div>
            <h2>React Demo Timer</h2>
            Time: {seconds}s
        </div>
    );
};

export default Timer;
