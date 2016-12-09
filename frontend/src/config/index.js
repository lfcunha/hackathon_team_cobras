/**
 * Created by luiscunha on 4/11/16.
 */

/*
 * __DEV__ and __PROD__ are magic variables set by webpack
 */

export const API_ENDPOINT = () => {

    try{
        if (__LOCAL__) {
            return "http://localhost:8070"
        }
        if (__DEV__) {
            return "http://localhost:8070"
        }
        if (__STAG__) {
            return "http://localhost:8070"
        }
        if (__PROD__) {
            return "http://localhost:8070"
        }
    }
    catch(err) {

    }
}
