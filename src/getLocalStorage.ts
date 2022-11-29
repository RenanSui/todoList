import { IList } from "./components/Todo";

const getLocalStorage = (): IList[] => {
    // return the current list
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list')!)
        : [];
};

export default getLocalStorage;
