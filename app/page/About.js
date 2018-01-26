import React from "react";
import {BrowserRouter as Router,Route,Link,IndexRoute,Redirect} from "react-router-dom";
const About = ({match}) =>(
            <div>
                想知道更多关于我的信息吗? <Link to={`/List/me`}>点击这里</Link>
            </div>
    );


export default About;