import axios from "axios";

export const fetchProgram = (programName) => dispatch => {
    console.log('cheto delau');
    axios.get(`v1/program?name=${programName}`)
        .then(({ data }) => {
            console.log(programName)
            dispatch(setProgram(data));
        }).catch((e)=>console.log(e));
};

export const setProgram = (items) => {

    return({
        type: 'SET_PROGRAM',
        payload: items.data
    })};

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});