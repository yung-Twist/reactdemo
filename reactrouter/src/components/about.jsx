import React from 'react';
import {Route, Link, NavLink, Switch} from 'react-router-dom';
import CC from './cc';
class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                msg:[
                    {
                        name:"CC",
                        id:1
                    },
                    {
                        name:"HH",
                        id:2
                    },
                    {
                        name:"TT",
                        id:3
                    }
                ]
            })
        },1000)
    }
    render(){
        return (
            <div>
                <h4>关于我们。。</h4>
                <ul>
                    {
                        this.state.msg.map((item,index)=>{
                            return (
                                <li key={index}><NavLink to={`/about/cc/${item.id}/${item.name}`}>{item.name}</NavLink></li>
                            )
                        })
                    }
                    
                </ul>
                {/* <Switch> */}
                    <Route path='/about/cc/:id/:name' component={CC}></Route>
                {/* </Switch> */}
            </div>
        )
    }
}
export default About;