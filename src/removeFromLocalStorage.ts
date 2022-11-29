import getLocalStorage from './getLocalStorage';

const removeFromLocalStorage = (id: number) => {
    const list = getLocalStorage();
    const newList = list.filter((item: any) => item.id != id);

    localStorage.setItem('list', JSON.stringify(newList));
};

export default removeFromLocalStorage;
