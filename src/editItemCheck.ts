import getLocalStorage from './getLocalStorage';
import { IList } from "./components/Todo";


const editItemCheck = (id: number, checked: Boolean) => {
    const list: IList[] = getLocalStorage();

    let newList = list.map((item: any) =>
        item.id == id
            ? { id: item.id, message: item.message, checked: !checked }
            : { id: item.id, message: item.message, checked: item.checked }
    );

    localStorage.setItem('list', JSON.stringify(newList));
};

export default editItemCheck;
