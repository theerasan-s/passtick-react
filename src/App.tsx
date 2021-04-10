import React from 'react'
import { Route } from 'react-router'
import testPage from './page/TestPage/testPage'
import LoginPage from './page/LoginPage/LoginPage'
import NavigationBar from './NavigationBar/NavigationBar'
import 'antd/dist/antd.css'
import { GlobalStyles } from './components/Typography/Typography'

function App() {
    return (
        <div>
            <GlobalStyles />
            <NavigationBar />
            <Route path="/test" component={testPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
        </div>
    )
}

export default App
