import React from 'react';
import Clock from './ReactHook';
import '../App.css';
import ClockEffect from './ReactHookClockEffect';
import Countdown from './ReactHookCountdown';

function ReactHookClock () {
    return (
        <div className="React-Hook-Clock-App">
            <header className="React-Hook-Clock-Header">
                Ejemplo de React Hook
                <Clock start={0}/>
                <ClockEffect start={42}/>
                <Countdown start={10}/>
            </header>
        </div>
    );
}

export default ReactHookClock;