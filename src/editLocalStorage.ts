import getLocalStorage from './getLocalStorage';
import { IList } from "./components/Todo";

const editLocalStorage = (value: string, id: number) => {
    let newList: Object;
    const list: IList[] = getLocalStorage();

    newList = list.map((item: any) =>
        item.id == id
            ? { id: item.id, message: value }
            : { id: item.id, message: item.message }
    );

    localStorage.setItem('list', JSON.stringify(newList));
};

export default editLocalStorage;
