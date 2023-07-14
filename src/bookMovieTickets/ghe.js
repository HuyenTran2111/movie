import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChonGhe } from '../store/action';

class Ghe extends Component {
  render() {
    console.log('cccccccccccccccccc')
    const { ghe,} = this.props;
    return (
      <td>
        <button className='ghe btn'
        onClick={() => {
          this.props.chonGhe(ghe);
        }
        } style={ghe.daDat ? ghe.gia === 0 ? {backgroundColor: 'orange'}  : {backgroundColor: 'green'} : {backgroundColor: 'white'} }>
          {ghe.soGhe}
          </button>
    </td>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gheVuaDat: state.userReducer.danhSachGhe
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (soGhe) => {
      dispatch(actChonGhe(soGhe));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Ghe);