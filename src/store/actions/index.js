//The idea is to have just one place where to import from.
//It will become more useful once we have more actual creator files
export { addPlace, deletePlace, getNews } from './news';
export { authOne, authTwo, authGetToken, authAutoSignIn, authLogout } from './auth';
export { uiStartLoading, uiStopLoading } from "./ui";
