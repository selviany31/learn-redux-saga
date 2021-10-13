import { call, put } from "redux-saga/effects";
import { setData } from "../../norris/norris";
import { requestGetData } from "../requests/norris";

export function* handleGetData(action) {
    try {
        const response = yield call(requestGetData);
        const { data } = response;
        yield put(setData(data))
    } catch (error) {
        console.log(error)
    }
}