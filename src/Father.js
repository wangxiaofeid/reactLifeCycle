import React, { Component } from "react";
import Children from "./Children";
import { Xx1, Xx2, Xx3 } from "./CompType";

export default class Father extends Component {
  constructor(props, context, updater) {
    super(props);
    this.state = {
      num: 1
    };
    console.log("father constructor");
  }

  // 即将废弃
  // componentWillMount() {
  //   console.log('father componentWillMount');
  // }

  //根据父组件传来的props按需更新自己的state;
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("father getDerivedStateFromProps");
    return {
      appProp: nextProps.appProp
    };
  }

  render() {
    console.log("father render");
    const { num, appProp } = this.state;
    return (
      <div className="father">
        father:
        <div>父组件传过来的appProp: {appProp}</div>
        <button
          onClick={() => {
            this.setState({
              num: num + 1
            });
          }}
        >
          {num} + 1
        </button>
        <div>
          <button
            onClick={() => {
              this.forceUpdate();
            }}
          >
            forceUpdate
          </button>
        </div>
        <Children num={num} />
        <Xx1 />
        <Xx2 />
        <Xx3 />
      </div>
    );
  }

  componentDidMount() {
    console.log("father componentDidMount");
  }

  // 即将废弃
  // componentWillReceiveProps(nextProps) {
  //   console.log('father componentWillReceiveProps')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("father shouldComponentUpdate");
    return true;
  }

  // 即将废弃
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('father componentWillUpdate')
  // }

  // 在render后，挂载前调用；返回值作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("father getSnapshotBeforeUpdate");
    return 1;
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log(`father componentDidUpdate, snapshot: ${snapshot}`);
  }

  componentWillUnmount() {
    console.log("father componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("father componentDidCatch");
  }
}
