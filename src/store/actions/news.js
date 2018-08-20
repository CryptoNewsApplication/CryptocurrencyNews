import { ADD_PLACE, DELETE_PLACE, SET_NEWS } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetToken } from './index';

export const addPlace = (newsName) => {
    return {
        type: ADD_PLACE,
        newsName: newsName
    };
}

export const getNews = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        fetch('https://cryptocurrency-news-213821.appspot.com/news')
            .catch(err => {
                alert("Something went wrong!");
                console.log(err);
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                const generalNews = [];
                const blockchainNews = [];
                const exchangesNews = [];
                const governmentNews = [];
                const analysisNews = [];
                for (var i = 0; i < parsedRes.length; i++) {
                    switch(parsedRes[i].primaryCategory){
                        case "General":
                            generalNews.push({
                                ...parsedRes[i],
                                key: i
                            });
                            break;
                        case "Blockchain":
                            blockchainNews.push({
                                ...parsedRes[i],
                                key: i
                            })
                            break;
                        case "Exchanges":
                            exchangesNews.push({
                                ...parsedRes[i],
                                key: i
                            })
                            break;
                        case "Government":
                            governmentNews.push({
                                ...parsedRes[i],
                                key: i
                            })
                            break;
                        case "Analysis":
                            analysisNews.push({
                                ...parsedRes[i],
                                key: i
                            })
                            break;
                        default:
                            break;
                    }
                }
                dispatch(setNews(generalNews, blockchainNews, exchangesNews, governmentNews, analysisNews))
                dispatch(uiStopLoading());
            });
    };
};

export const setNews = (generalNews, blockchainNews, exchangesNews, governmentNews, analysisNews) => {
    return {
        type: SET_NEWS,
        generalNews: generalNews,
        blockchainNews: blockchainNews,
        exchangesNews: exchangesNews,
        governmentNews: governmentNews,
        analysisNews: analysisNews
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
}
