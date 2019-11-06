import React, { Component } from "react";

export default class Children extends Component {
  constructor(props, context, updater) {
    super(props);
    this.state = {};
    console.log("children constructor");
  }

  //根据父组件传来的props按需更新自己的state;
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("children getDerivedStateFromProps");
    return {
      num: nextProps.num
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("children shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("children render");
    const { num } = this.state;
    return (
      <div className="children">
        children:
        <br />
        父组件传递过来的：{num}
      </div>
    );
  }

  componentDidMount() {
    console.log("children componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("children getSnapshotBeforeUpdate", this.props, prevProps);
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`children componentDidUpdate, snapshot: ${snapshot}`, this.props, prevProps);
  }

  componentWillUnmount() {
    console.log("children componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("children componentDidCatch");
  }
}
