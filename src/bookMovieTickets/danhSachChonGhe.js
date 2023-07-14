import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachChonGhe extends Component {

  renderDanhSachChonGhe = () => {
    const { danhSachChonGhe  } = this.props;
    console.log(danhSachChonGhe);
    return danhSachChonGhe?.map((ghe) => {
      return (
          <tr key={ghe.soGhe}>
            <td>{ghe.soGhe}</td>
            <td>{ghe.gia}</td>
            <td className='huy'>X</td>
          </tr>
          // {/* <tr>
          //   <td>{ghe.gia}</td>
          // </tr> */}
       

      )
    }
    )
  }
  render() {
    return (
      <div>
        <table className='table' border={'2'}>
          <thead className='thead'>
            <tr>
              <th className='th'>Số ghế</th>
              <th className='th'>Giá</th>
              <th className='th'>Hủy</th>
            </tr>
            
            
          </thead>
          <tbody>
            {this.renderDanhSachChonGhe()}

            <tr>
              <th>Tổng tiền</th>
              <th className='gia'>{this.props.totalPrice}</th>
              <th className='th'></th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachChonGhe: state.userReducer.danhSachChonGhe,
    totalPrice: state.userReducer.totalPrice,
    
  }
}
export default connect(mapStateToProps, null)(DanhSachChonGhe);



