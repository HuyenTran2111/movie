import danhSachGhe from "../bookMovieTickets/danhSachGhe.json";


const initialState = {
    danhSachGhe,
    danhSachChonGhe: [],
    totalPrice: 0,
};


const userReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case "CHON_GHE":
            const ghe = action.payload;
            let danhSachChonGheClone = [...state.danhSachChonGhe];

            console.log(danhSachChonGheClone);
            
            const gheClone = {...ghe};
            state.totalPrice += gheClone.gia;
            danhSachChonGheClone.push(gheClone);
            state.danhSachChonGhe = danhSachChonGheClone;
            
            return { ...state };


        default:
            return { ...state };

    }



};

export default userReducer;
