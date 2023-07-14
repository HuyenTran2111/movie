import React, { Component } from 'react';
import DanhSachGhe from './danhSachGhe';
import DanhSachChonGhe from './danhSachChonGhe';

export default class BookMovieTickets extends Component {

    render() {
        return (
            <div className='wrap'>
                <div className='row'>
                    <div className=' text-center col-sm-8'>
                        <div className="container">
                            <div className='content'>
                                <h1 className='title__left'>ĐẶT VÉ XEM PHIM</h1>
                                <h3 className='text'>Màn hình</h3>
                                <div className='screen'></div>

                                <div className='danhSach text-center'>
                                    <DanhSachGhe />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' col-sm-4'>
                        <div className="container">
                            <div className="content">
                                <h1 className='title__right'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                                <ul className='chonGhe'>
                                    <li className='li green'>
                                        Ghế đang chọn
                                    </li>
                                </ul>
                                <ul className='chonGhe'>
                                    <li className='li orange'>
                                        Ghế đã đặt
                                    </li>
                                </ul>
                                <ul className='chonGhe '>
                                    <li className='li white'>
                                        Ghế chưa chọn
                                    </li>
                                </ul>
                                <DanhSachChonGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
