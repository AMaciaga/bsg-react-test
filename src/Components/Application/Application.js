import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Splash from '../Splash/Splash';
import SignIn from '../SignIn/SignIn';
import MainPage from '../MainPage/MainPage';
import MoviePage from '../MoviePage/MoviePage';
import Wrapper from '../Wrappers/Wrapper';

function Application(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/signIn" component={SignIn}/>
                <Wrapper header={true}>
                    <Route exact path="/home" component={MainPage}/>
                    <Route exact path="/movie/:id" component={MoviePage}/>
                </Wrapper>
            </Switch>
        </BrowserRouter>
    )
}
export default Application