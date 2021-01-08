import React, { Component } from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    start() {
        return {
            type: 'START'
        }
    }

    stop() {
        return {
            type: 'STOP'
        }
    }

    reset() {
        return {
            type: 'RESET'
        }
    }

    /*
    timeToString(time) {
        let diffInHrs = time / 3600000;
        let hh = Math.floor(diffInHrs);
      
        let diffInMin = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMin);
      
        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);
      
        let diffInMs = (diffInSec - ss) * 1000;
        let ms = Math.floor(diffInMs);
      
        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");
        let formattedMS = ms.toString().padStart(2, "0");
        return `${formattedMM}:${formattedSS}${formattedMS}`;
    }
    */

    startTest(){
        let startTime = Date.now();
        setInterval(function printTime(){
            let elapsedTime = Date.now() - startTime;
            //console.log(this.timeToString(elapsedTime))
        }, 0)
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    store.dispatch(this.start())
                    this.startTest()
                }}>
                    Start
                </button>
                <button onClick={() => {
                    store.dispatch(this.stop())

                }}>
                    Stop
                </button>
                <button onClick={() => {
                    store.dispatch(this.reset())
                }}>
                    Reset
                </button>
                <Timer time={store.getState().time} />
            </div>
        )
    }
}

export default App
