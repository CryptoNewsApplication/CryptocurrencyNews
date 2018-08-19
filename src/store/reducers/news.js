import { ADD_PLACE, DELETE_PLACE, SET_NEWS } from "../actions/actionTypes";

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
        case ADD_PLACE:
            return {
                ...state, //old property, old state
                news: state.news.concat({
                    key: Math.random(), 
                    name: action.newsName,
                    image: {
                      uri: "http://www.1t23.com/images/bahamas.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                news: state.news.filter(oneNews => {
                    return oneNews.key !== action.placeKey;
                  }),
                  selectedNews: null
            };
        default:
            return state;
    }
};

export default reducer;