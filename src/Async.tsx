import * as React from 'react';

export default class Async extends React.Component<any, any> {
  cancelUpdate: boolean;
  C: any;

  componentWillMount() {
    this.cancelUpdate = false;
    this.props.load.then((c: any) => { 
      this.C = c;
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.cancelUpdate = true;
  }
  render() {
    const { load, ...props } = this.props;
    return this.C
      ? this.C.default
        ? <this.C.default {...props} />
        : <this.C {...props} />
      : null;
  }
}
