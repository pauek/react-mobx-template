
import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
  render() {
    let { store } = this.props;
    return <h1>Hello {store.name}</h1>;
  }
}
