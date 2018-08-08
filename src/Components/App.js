import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Excercise from "./Excercise";
import { muscles, excercises } from "../store";
import _ from "lodash";

export default class App extends Component {
  state = {
    excercises,
    category: "all"
  };

  getExcercisesByMuscles() {
    return Object.entries(_.groupBy(this.state.excercises, "muscles"));
  }

  onCategory = category => {
    this.setState({ category });
  };

  render() {
    const excerciseByMuscles = this.getExcercisesByMuscles(),
      { category } = this.state;
    return (
      <Fragment>
        <Header />
        <Excercise excercises={excerciseByMuscles} category={category} />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.onCategory}
        />
      </Fragment>
    );
  }
}
