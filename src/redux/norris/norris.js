/* eslint-disable import/no-anonymous-default-export */
export const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA";

export const getData = () => ({
    type: GET_DATA
});

export const setData = (jokes) => ({
    type: SET_DATA,
    jokes
});

const initialState = {
    jokes: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            const { jokes } = action;
            return { ...state, jokes }
        default:
            return state;
    }
}