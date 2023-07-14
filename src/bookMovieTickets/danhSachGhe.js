import React, { Component } from 'react';
import HangGhe from './hangGhe';
import { connect } from 'react-redux';

 class DanhSachGhe extends Component {

    renderDanhSachGhe = () => {
        let { danhSachGhe, } = this.props;
        console.log('aaaaaaaaaaaaaaaaaaaa')
        return danhSachGhe?.map((hangGhe) => {
            return <HangGhe key={hangGhe.hang}  hangGhe ={hangGhe.hang} danhSach={hangGhe}/>
        })
       
    }
  render() {
    return (
      <div>
        <table className='tab'>
            <tbody>
                {this.renderDanhSachGhe()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        danhSachGhe: state.userReducer.danhSachGhe,
    }
}

export default connect(mapStateToProps, null) (DanhSachGhe);