import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div className="grid-x">
        <div className="cell small-12 medium-6 medium-offset-3 large-4 large-offset-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}
