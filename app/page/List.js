import React from "react";
import {BrowserRouter as Router,Route,Link,IndexRoute,Redirect,Switch} from "react-router-dom";


const List = ({match}) =>(

    <div>
           
          
           <div><Link to={`${match.url}/1`}>文章 1</Link></div>
           <div><Link to={`${match.url}/2`}>文章 2</Link></div>
           <div><Link to={`${match.url}/3`}>文章 3</Link></div>
           <div><Link to={`${match.url}/4`}>文章 4</Link></div>
           
           
           <Route  path={`${match.url}/:id`} component={ListContent} />
           
             <Route exact path={`${match.url}/me`} render={()=>{
                                return (
                                    <h1>我就是我，不一样的我</h1>
                                )
                }} />
            <Route exact path={`${match.url}`} render={()=>{
                    return (<div>请选择一个ID</div>)
                }} />
            <Route exact path="/Aj" children={(props)=>{console.log("孩子:",props);return (<div>孩子组件?</div>)}} />
           
           
    </div>

);

const ListContent = ({match}) =>{
    console.log("我被渲染了",match)
     return (
                        <div>
                            你正在阅读文章 {match.params.id}
                        </div>
                    );
}

export default List;