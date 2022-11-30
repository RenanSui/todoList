import getLocalStorage from './getLocalStorage';

const editLocalStorage = (value: string, id: number) => {
    let newList: Object;
    const list = getLocalStorage();

    newList = list.map((item: any) =>
        item.id == id
            ? { id: item.id, message: value }
            : { id: item.id, message: item.message }
    );

    localStorage.setItem('list', JSON.stringify(newList));
};

export default editLocalStorage;
