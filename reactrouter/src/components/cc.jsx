import React from 'react';
class CC extends React.Component{
    render(){
        console.log(this.props.match.params)
        return (
            <div>
                {/* <h4>{this.props.match.url}</h4> */}
                <h2>名字：{this.props.match.params.name}</h2>
            </div>
        )
    }
}
export default CC;