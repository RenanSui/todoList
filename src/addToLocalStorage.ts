import getLocalStorage from './getLocalStorage';

const addToLocalStorage = (message: string, id: number, checked: Boolean) => {
    let list = getLocalStorage();
    const newItem = { id, message, checked };

    list.unshift(newItem);

    localStorage.setItem('list', JSON.stringify(list));
};

export default addToLocalStorage;
