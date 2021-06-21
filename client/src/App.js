import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import {fetchProgram} from "./redux/action/program";
import Page from "./page/Page";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const fetchData = (programName) => {
        dispatch(fetchProgram(programName))
    }
  return (
      <Route path="/:programName"
             exact
             render={
                 (props) =>
                     <Page
                         {...props}
                         stateHandler={() => fetchData(props.match.params.programName)}
                     />
             }
      />


  );
}

export default App;

