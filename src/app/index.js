import React from "react";
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Home} from "./Components/Home";
import {AppBar} from "material-ui";

class App extends React.Component{
    render() {
        return(
            <div>
                
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));