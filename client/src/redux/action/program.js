import axios from "axios";

export const fetchProgram = (programName) => dispatch => {
    axios.get(`api/programs?=${programName}`)
        .then(({ data }) => {
            dispatch(setProgram(data))
        })
};

export const setProgram = (items) => {

    return({
        type: 'SET_CARDS',
        payload: items
    })};

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});