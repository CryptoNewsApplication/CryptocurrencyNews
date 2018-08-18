import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

//if we don't have a state, we start from the initial one (state = initialState)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state, //old property, old state
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                      uri: "http://www.1t23.com/images/bahamas.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                  }),
                  selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;