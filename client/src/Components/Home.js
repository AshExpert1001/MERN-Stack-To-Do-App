import React, { Component } from 'react';


class Home extends Component{
    state={
        text:"",
        mywishes:[{_id:1, wish:"loading"}]
    }
    handledelete(id){
        fetch('/remove/'+id,{method:'delete'})
        .then(res=>res.json())
        .then(res2=>{
            console.log(res2)
            const newWishes = this.state.mywishes.filter(item=>{
                return item._id !== res2._id
            })
            this.setState({
                mywishes:newWishes
            })
        })
    }
    componentDidMount(){
        fetch('/data')
        .then(res=>res.json())
        .then(res2=>{
            console.log(res2)
            this.setState({
                mywishes:res2
            })
        })
    }
    handleSubmit(e){
        e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
            data.append(pair[0],pair[1])
        }
        fetch('/send',{
            method:"post",
            body:data,
            
        }).then(res=>res.json())
        .then(res2 => {
            console.log(res2)
            this.setState({
                mywishes:[...this.state.mywishes,res2]
            })
        });
    
    }
    render(){
        const list = this.state.mywishes.map(item=>{
            return <div className="collection-item purple-text" 
                        onClick={()=>this.handledelete(item._id)}
                        key={item._id}
                         ><h5>{item.wish}</h5></div>
        })
    return (
        <div className="container m-4">
            <h1 className="purple-text text-lighten-2">Add Some Text Here.</h1>
            <form className="col s12" onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="input-field col s6">
            <input id="last_name" 
            type="text" 
            name="item"
            value={this.state.text}
            onChange={(e)=>this.setState({text:e.target.value})}
            className="validate"
             />
            <label to="last_name">Add To Do Here..</label>
            </div>
            <button className="btn waves-effect waves-light purple lighten-2" type="submit">Add
                <i className="material-icons right">send</i>
            </button>
            </form>
            <div className="collection" style={{marginTop:10}}>
                {list}
            </div>
        </div>
    );
  }

}

export default Home;
