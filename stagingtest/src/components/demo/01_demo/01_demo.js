import React from 'react';
import './01_demo.css';

class PracticeOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            evaluateList:[
                {
                    username:"CC",
                    evaluate:"搞得不错"
                }
            ]
        }
    }
    render(){
        return(
            <div style={this.props.isshow}>
                <div className="wrap">
                    <div className="ptitle">请发表对react的评论</div>
                    <div className="pcontent">
                        <div className="con-left">
                            <input ref="username" placeholder="用户名"></input>
                            <textarea ref="evaluate" placeholder="请输入评价内容"></textarea>
                            <button onClick={this.submitAdd.bind(this)}>提交</button>
                        </div>
                        <div className="con-right">
                            <RightCon data={this.state.evaluateList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    submitAdd(){
        let data = {
            username:this.refs.username.value,
            evaluate:this.refs.evaluate.value
        }
        let evaluateList = this.state.evaluateList
        evaluateList.unshift(data)
        this.setState({evaluateList})
        console.log(this.state.evaluateList)
        this.refs.username.value = ''
        this.refs.evaluate.value = ''
    }
} 
class RightCon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        let data = this.props.data
        return (
            <div className="rightWrap">
                <h3>评论回复</h3>
                <ul>
                    {
                        data.map((item,index)=>{
                            return(

                                // <li key={index}>{item.username}</li>
                                <li key={index}>{item.evaluate}</li>
                                
                            )
                        })
                    }
                    
                    
                </ul>
            </div>
        )
    }
}
export default PracticeOne ;