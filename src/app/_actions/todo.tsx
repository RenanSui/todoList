export const getLocalStorage = () => {
	// return the current list
	return localStorage.getItem('list')
			? JSON.parse(localStorage.getItem('list')!)
			: [];
};

export const addToLocalStorage = (message: string, id: number, checked: Boolean) => {
	let list = getLocalStorage();
	const newItem = { id, message, checked };

	list.unshift(newItem);

	localStorage.setItem('list', JSON.stringify(list));
};

export const editLocalStorage = (value: string, id: number) => {
	let newList: Object;
	const list = getLocalStorage();

	newList = list.map((item: any) =>
			item.id == id
					? { id: item.id, message: value }
					: { id: item.id, message: item.message }
	);

	localStorage.setItem('list', JSON.stringify(newList));
};

export const removeFromLocalStorage = (id: number) => {
	const list = getLocalStorage();
	const newList = list.filter((item: any) => item.id != id);

	localStorage.setItem('list', JSON.stringify(newList));
};

export const editItemCheck = (id: number, checked: Boolean) => {
	const list = getLocalStorage();

	let newList = list.map((item: any) =>
			item.id == id
					? { id: item.id, message: item.message, checked: !checked }
					: { id: item.id, message: item.message, checked: item.checked }
	);

	localStorage.setItem('list', JSON.stringify(newList));
};
