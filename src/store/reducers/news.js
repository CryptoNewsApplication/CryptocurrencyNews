import { SET_NEWS } from "../actions/actionTypes";

const initialState = {
    generalNews: [],
    blockchainNews: [],
    exchangesNews: [],
    governmentNews: [],
    analysisNews: []
};

//if we don't have a state, we start from the initial one (state = initialState)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                generalNews: action.generalNews,
                blockchainNews: action.blockchainNews,
                exchangesNews: action.exchangesNews,
                governmentNews: action.governmentNews,
                analysisNews: action.analysisNews
            };
        default:
            return state;
    }
};

export default reducer;