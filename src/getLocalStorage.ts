const getLocalStorage = () => {
    // return the current list
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list')!)
        : [];
};

export default getLocalStorage;
