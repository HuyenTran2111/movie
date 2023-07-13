import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ghe extends Component {
  render() {
    const { ghe,} = this.props;
    return (
      <td>
        <button className='ghe btn'
        onClick={() => {
          this.props.chonGhe(ghe);
        }
        }>
          {ghe.soGhe}
          </button>
    </td>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (soGhe) => {
      const action = {
        type: "CHON_GHE",
        payload: soGhe,
      }
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps) (Ghe);