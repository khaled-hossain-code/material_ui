import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Excercise from "./Excercise";
import { muscles, excercises } from "../store";
import _ from "lodash";

export default class App extends Component {
  state = {
    excercises,
    excercise: {},
    category: "all"
  };

  getExcercisesByMuscles() {
    return Object.entries(_.groupBy(this.state.excercises, "muscles"));
  }

  onCategory = category => {
    this.setState({ category });
  };

  onSubCategory = SubCategoryId => {
    this.setState(({ excercises }) => ({
      excercise: excercises.find(ex => ex.id === SubCategoryId)
    }));
  };

  render() {
    const excerciseByMuscles = this.getExcercisesByMuscles(),
      { category, excercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Excercise
          excercises={excerciseByMuscles}
          category={category}
          excercise={excercise}
          onSelect={this.onSubCategory}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.onCategory}
        />
      </Fragment>
    );
  }
}
