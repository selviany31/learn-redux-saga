import { takeLatest } from "redux-saga/effects";
import { handleGetData } from "./handlers/norris";
import { GET_DATA } from "../norris/norris"

export function* watcherSaga() {
    yield takeLatest(GET_DATA, handleGetData)
}