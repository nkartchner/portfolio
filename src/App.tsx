import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Navigation/MainRouter";
import { theme } from "./Theme/Theme";
import { ThemeProvider } from "@material-ui/core";
function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
