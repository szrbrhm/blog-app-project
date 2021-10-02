import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from '../pages/Login'
import Register from "../pages/Register"
import Dashboard  from "../pages/Dashboard"
import NewBlog from '../pages/NewBlog'
import Detail from '../pages/Detail'
import UpdateBlog from '../pages/UpdateBlog'
import PrivateRouter from "./PrivateRouter";
import Profile from '../pages/Profile'

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/" component={Dashboard}/>

                <PrivateRouter path="/profile" component={Profile}/>
                <PrivateRouter path="/new-blog"  component={NewBlog}/>
                <PrivateRouter path="/update-blog/:id" component={UpdateBlog}/>
                <PrivateRouter path="/detail/:id" component={Detail}/>
            </Switch>
            
        </Router>
    )
}

export default AppRouter
