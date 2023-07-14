import React, { Component } from 'react';
import Ghe from './ghe';

export default class HangGhe extends Component {

    renderGhe = () => {
        console.log('bbbbbbbbbbbbbbbbbbbb')
        const { danhSach } = this.props;
        if (danhSach.hang === "") {
            return danhSach.danhSachGhe.map((ghe) => {
                return <td className='soGhe' key={ghe.soGhe}>{ghe.soGhe}</td>
            });
        } else {
            return danhSach.danhSachGhe.map((ghe) => {
                return <Ghe key={ghe.soGhe} ghe={ghe} />
            });
        }
    }
    render() {
        const { hangGhe } = this.props;
        return (
            <tr>
                <td className='hangGhe'>{hangGhe}</td>
                {this.renderGhe()}
            </tr>
        )
    }
}
