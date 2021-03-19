// 2021-03-19

import React from "react";
import Loading from "./loading";

import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync(options);
    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
