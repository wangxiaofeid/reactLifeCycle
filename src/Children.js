import React, { Component } from "react";

export default class Children extends Component {
  constructor(props, context, updater) {
    super(props);
    this.state = {}
    console.log('children constructor');
  }

  根据父组件传来的props按需更新自己的state
  static getDerivedStateFromProps(props, state) {
    console.log('children getDerivedStateFromProps');
    return {
      num: props.num
    }
  }

  render() {
    console.log('children render');
    const { num } = this.state;
    return <div className="children">
      children:
      <br />
      父组件传递过来的：{num}
    </div>
  }

  componentDidMount() {
    console.log('children componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('children shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('children getSnapshotBeforeUpdate');
    return 1
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log(`children componentDidUpdate, snapshot: ${snapshot}`)
  }

  componentWillUnmount() {
    console.log('children componentWillUnmount')
  }

  componentDidCatch(error, info) {
    console.log('children componentDidCatch')
  }
}