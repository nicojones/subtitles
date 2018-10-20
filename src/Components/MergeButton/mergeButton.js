import React from 'react';
import {Global} from './../../globals';

class MergeButton extends React.Component {
  
  render() {
    return (
      <div className={Global.cols}>
        <button className="btn btn-info btn-lg btn-400" onClick={this.props.onClick}>Merge files...</button>
      </div>
    )
  }
}

export default MergeButton;