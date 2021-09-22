import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SignIn from '../SignIn/SignIn';
import Splash from '../Splash/Splash';
import WrapperWithHeader from '../Wrappers/WrapperWithHeader';
import WrapperWithoutHeader from '../Wrappers/WrapperWithoutHeader';

function Application(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/signIn" component={SignIn}/>
                <WrapperWithHeader>
                    <Route exact path="/home" component={MainPage}/>
                </WrapperWithHeader>
            </Switch>
        </BrowserRouter>
    )
}
export default Application