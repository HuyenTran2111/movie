import { CHON_GHE } from "./constants.js";

const actChonGhe = (soGhe) => {
    const action = {
        type: CHON_GHE,
        payload: soGhe,
      };
      return action;
}
export { actChonGhe };