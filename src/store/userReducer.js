import danhSachGhe from "../bookMovieTickets/danhSachGhe.json";
import { CHON_GHE } from "./constants";


const initialState = {
    danhSachGhe,
    danhSachChonGhe: [],
    totalPrice: 0,
};


const userReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case CHON_GHE:
            
            const ghe = action.payload;
            if(ghe.daDat && ghe.gia === 0){
                return {...state};
            }
            if(!ghe.daDat){
                let danhSachChonGheClone = [...state.danhSachChonGhe];
                
                const gheClone = {...ghe};
                state.totalPrice += gheClone.gia;
                danhSachChonGheClone.push(gheClone);
                state.danhSachChonGhe = danhSachChonGheClone;
                
                let danhSachGheClone = [...state.danhSachGhe];
                for (let i = 0; i < danhSachGheClone.length; i++) {
                    for (let j = 0; j < danhSachGheClone[i].danhSachGhe.length; j++) {
                        if (danhSachGheClone[i].danhSachGhe[j].soGhe === ghe.soGhe) {
                            danhSachGheClone[i].danhSachGhe[j].daDat = true ;
                            
                        }
                    }
                }
                state.danhSachGhe = danhSachGheClone;
            }else {
                let danhSachChonGheClone = [...state.danhSachChonGhe];

                const gheClone = {...ghe};
                state.totalPrice -= gheClone.gia;
                danhSachChonGheClone = danhSachChonGheClone.filter(ghe => ghe.soGhe !== gheClone.soGhe);
                state.danhSachChonGhe = danhSachChonGheClone;

                let danhSachGheClone = [...state.danhSachGhe];
                for (let i = 0; i < danhSachGheClone.length; i++) {
                    for (let j = 0; j < danhSachGheClone[i].danhSachGhe.length; j++) {
                        if (danhSachGheClone[i].danhSachGhe[j].soGhe === ghe.soGhe) {
                            danhSachGheClone[i].danhSachGhe[j].daDat = false;
                            
                        }
                    }
                }
                state.danhSachGhe = danhSachGheClone;
            }
            
            
            return { ...state };


        default:
            return { ...state };

    }



};

export default userReducer;
