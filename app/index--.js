import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link,IndexRoute,Redirect} from "react-router-dom";
import $ from "Jquery";
// import {routerConfig} from "./router";

class App extends  Component{

    render(){
        return (
            <div>
                App Version : 1.3
            </div>
        );
    }
}

class ListBox extends Component{
    render(){
        return (
            <div>
              <Link to="/message/30" >into Message(30)</Link>
            </div>
        );
    }
}

class IndexPage extends Component{
    render(){
        return (
            <div>
                <div><Link to="/about" >click to about</Link></div>
                <div><Link to="/news" >click to news</Link></div>
                 <div><Link to="/listbox" >click to ListBox</Link></div>
            </div>
        );
    }
}

class News extends Component{
    render(){
        return (
            <div>
                News page
            </div>
        );
    }
}

class About extends Component{
    render(){
        return (
            <div>
            About:
                <Link to={`/listbox`} >about me</Link>
            </div>
        );
    }
}



class Message extends Component{

    constructor(props){
        super(props);
        console.log(props);
        
    }


    render(){
        const {match} = this.props;
        if(match.params.id){
            var content = <div>get a id:{match.params.id}</div>;
        }else{
            var content = "";
        }
        return (<div>  
                <div>{content}</div>    
                <Route exact path={`${match.url}/:id`} component={Message} />
                <Route exact path={match.url} render={()=>(<div>Please get me a ID Value</div>)} />
             </div>
        );
        
    }

}



ReactDOM.render(
    <Router>
        <div>
            <Route extra path="/" component={IndexPage} />
            <Route path="/listbox" component={ListBox} />
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
            <Route path="/message" component={Message} />
        </div>
        
    </Router>
,document.getElementById("root"));

if(module.hot){
    module.hot.accept();
}