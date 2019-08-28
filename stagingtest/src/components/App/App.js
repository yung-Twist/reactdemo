import React from 'react';
// import logo from './logo.svg';
import './App.css';

import PracticeOne from '../demo/01_demo/01_demo';
// import {Button} from 'antd/es';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayOne:{display:'block'}
        }
    }
    render(){
        return(
            <div className="App">
                <div className="App-header ">
                    <div className="practiveList">
                        <a className="App-link" onClick={this.toPractive_01.bind(this)}>练习一</a>
                        
                    </div> 

                    <PracticeOne isshow={this.state.displayOne}/>
                </div>
            </div>
        )
    }
    toPractive_01(){
        this.setState({
            displayOne:{display:'block'}
        })
    }
}
export default App;