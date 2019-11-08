import React, { Component, PureComponent } from 'react';

export class Xx1 extends Component {
    render() {
        console.log('普通组件');
        return <div>xx2</div>;
    }
}

export function Xx2() {
    console.log('函数组件');
    return <div>xx</div>;
}

export class Xx3 extends PureComponent {
    render() {
        console.log('pure组件');
        return <div>xx2</div>;
    }
}
