import React,{Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

const data = [
    {id:1,title:"Android 第一行代码"},
    {id:2,title:"C语言程序设计"},
    {id:3,title:"PHP交互设计"},
    {id:4,title:"React全家桶教程"},
    {id:5,title:"JavaScript程序设计"}
];

const AuthInfo = {
    isAuth:false,
    setAuthOn(handle){
        this.isAuth = true;
        setTimeout(handle,100);
    },
    setAuthOff(handle){
        this.isAuth = false;
        setTimeout(handle,100);
    },
    getAuthStatus(){
        return this.isAuth
    }
}

class Index extends Component{


    LoginButton(e){
        
    }

    render(){
        return (
            <div>
                <h3>欢迎阅读WebApp 1.0</h3>
                <button onClick={(e)=>this.LoginButton(e)}>登录</button>
                <div>
                    <Link to="/List">图书展示列表</Link>
                </div>
                <div>
                    <Link to="/Info">我的个人信息</Link>
                </div>
            </div>
        );
    }
}

const LoginApp = ()=>{
    return (
        
    );
}

const App = ()=>(
    <Router>
    <div>
        <Route  path="/" component={Index} />
        <Route path="/List" render={()=>(
            <div>
                <List data={data} />
            </div>
        )} />
        <Route path="/Info" render={()=>{
            let authStatus = this.AuthInfo.getAuthStatus();
            return (
                authStatus?(
                    <div>
                        你还没有登录，请点击“登录”按钮进行登录
                    </div>
                ):(
                    <div>
                        <Info />
                    </div>
                )
            )
        }}/>
    </div>
    </Router>
)


const Info = ()=>(
    <div>
        我的微信号:e503586547
    </div>
)



const List = (props) =>{

    let liststr = props.data.map((item,index)=>{
        return (
            <li key={index}>{item.id} - {item.title}</li>
        )
    });

    return (
        <ul>
            {liststr}
        </ul>
    );

};



render(<div><App /></div>,document.getElementById("root"));

if(module.hot){
    module.hot.accept();
}