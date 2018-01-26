import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link,IndexRoute,Redirect} from "react-router-dom";
import About from "./page/About";
import List from "./page/List";
class App extends Component{


    render(){
        return (
            <div>
                欢迎来到 “React全家桶”
                <div><Link to="/About">快来了解我吧!</Link></div>
                <div><Link to="/List">文章列表</Link></div>
            </div>
        );
    }

}


ReactDOM.render(
    <Router>
        <div>
            <Route extra path="/" component={App} />
            <Route path="/About" component={About} />
            <Route path="/List" component={List} />
        </div>
        
    </Router>
,document.getElementById("root"));

if(module.hot){
    module.hot.accept();
}