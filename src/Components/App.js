import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Excercise from "./Excercise";
import {muscles, excercises } from "../store";
import _ from "lodash";

export default class App extends Component {
  state = {
    excercises
  }

  getExcercisesByMuscles() {
    return Object.entries( 
      _.groupBy(this.state.excercises, 'muscles')
    );
  }

  render() {
    const excerciseByMuscles = this.getExcercisesByMuscles()
    return (
      <Fragment>
        <Header />
        <Excercise excercises={excerciseByMuscles}/>
        <Footer 
          muscles={muscles}
        />
      </Fragment>
    );
  }
}
