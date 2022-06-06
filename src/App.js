import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Customer from "./components/Customer/Customer";
import Invoice from "./components/Invoice/Invoice";
import Navigationbar from './components/Navigationbar';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigationbar />
                <Switch>
                    <Route exact path='/' component={Customer}/>
                    <Route path='/Invoice' component={Invoice}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;