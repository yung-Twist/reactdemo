import React from 'react';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './about';
import CC from './cc';
import './App.css';
class App extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h2>路由测试</h2>
                <ul>
                    <li><NavLink to='/home'>首页</NavLink></li>
                    <li><NavLink to='/about'>关于我们</NavLink></li>
                </ul>
                {/*
                    *Switch 只渲染匹配到的路由组件
                    *Redirect 重定向，匹配到from路劲重定向到to路径
                    *exact 路径精确匹配，有二级的使用不能使用
                */}
                <Switch>
                    {/* <Route exact path='/' component={CC}></Route> */}
                    <Route path='/home' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Redirect from='/' to='/about'></Redirect>
                </Switch>
            </div>
        )
    }
}
export default App;