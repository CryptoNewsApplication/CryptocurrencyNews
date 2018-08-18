import { ADD_PLACE, DELETE_PLACE, SET_NEWS } from "../actions/actionTypes";

const initialState = {
    news: [],
    ilryNews: [],
    ytnNews: [],
    insinooriNews: [],
    akavaNews: []
};

//if we don't have a state, we start from the initial one (state = initialState)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                ilryNews: action.ilryNews,
                ytnNews: action.ytnNews,
                insinooriNews: action.insinooriNews,
                akavaNews: action.akavaNews
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