import { editItemCheck, editLocalStorage, getLocalStorage, removeFromLocalStorage } from '@/app/_actions/todo';
import React, { useRef, useState } from 'react';



const List = ({ list, setList }: any) => {
    const listQuantity = list ? list.length : 0;
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState<Number>(0);
    const inputValueRef = useRef<HTMLInputElement>(null);

    const handleDelete = (id: number) => {
        removeFromLocalStorage(id);
        setList(getLocalStorage());
    };

    const handleEdit = (id: number, e: React.MouseEvent<SVGSVGElement>) => {
        const target = e.target as Element;
        setEditing(true);
        setEditingId(id);
    };

    const handleEditSubmit = (
        id: number,
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        let value: string | null = inputValueRef.current!.value;
        value ? editLocalStorage(value, id) : console.log('');

        inputValueRef.current!.value = '';
        setEditing(false);
        setEditingId(0);

        setList(getLocalStorage());
    };

    const handleCheck = (id: number, checked: Boolean) => {
        editItemCheck(id, checked);
        setList(getLocalStorage());
    };

    const handleClearAllItems = () => {
        const list: [] = [];
        localStorage.setItem('list', JSON.stringify(list));
        setList(getLocalStorage());
    };

    return (
        <section className="mt-6 font-josefin shadow-2xl transition-all duration-300">
            <h1 className='hidden'>Todo List</h1>
            {list &&
                list.map((item: any) =>
                    editing && editingId == item.id ? (
                        <form
                            onSubmit={(e) => handleEditSubmit(item.id, e)}
                            key={item.id}
                            className="flex items-center border-b-[1.65px] border-[#a4aad819] bg-[#39243d] first:rounded-t-md last:rounded-none last:border-none sm:border-b-[2px]"
                        >
                            <h1 className='hidden'>Edit individual item</h1>
                            <button className="flex cursor-pointer items-center">
                                <span className="relative mx-4 inline-block h-7 w-7 rounded-full border border-solid border-[#a4aad84d] bg-[#a4aad819] text-[#a4aad8] sm:mx-7 sm:h-10 sm:w-10"></span>
                            </button>
                            <input
                                autoFocus
                                ref={inputValueRef}
                                type="text"
                                placeholder={item.message}
                                className=" my-5 w-full rounded-r-md bg-[#39243d] text-[#a4aad8] outline-none placeholder:text-sm placeholder:tracking-widest placeholder:text-[#a4aad8] sm:my-8 sm:placeholder:text-sm"
                            />
                            {/* close button */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mr-6 h-12 w-12 cursor-pointer text-[#a4aad84d] transition-all duration-300 hover:text-[#d8a4a4] sm:mr-12"
                                onClick={() => setEditing(false)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </form>
                    ) : (
                        <div
                            id={item.id}
                            key={item.id}
                            className="flex items-center border-b-[1.65px] border-[#a4aad819] bg-[#24273D] first:rounded-t-md last:rounded-none last:border-none sm:border-b-[2px]"
                        >
                            <button
                                className="flex cursor-pointer items-center"
                                onClick={() =>
                                    handleCheck(item.id, item.checked)
                                }
                            >
                                {item.checked ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="relative mx-3 inline-block h-9 w-9  text-[#a4aad8] sm:mx-6 sm:h-12 sm:w-12"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                ) : (
                                    <span className="relative mx-4 inline-block h-7 w-7 rounded-full border border-solid border-[#a4aad84d] text-[#a4aad8] sm:mx-7 sm:h-10 sm:w-10" />
                                )}
                            </button>
                            <p className="my-5 w-full text-sm tracking-widest text-[#A4AAD8] transition-all duration-500 sm:my-8 sm:text-base">
                                {item.message}
                            </p>
                            {/* edit button */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mr-2 h-12 w-12 cursor-pointer text-[#a4aad84d] transition-all duration-300 hover:text-[#6ce556] sm:mr-3"
                                onClick={(e) => handleEdit(item.id, e)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                            {/* delete button */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mr-3 h-12 w-12 cursor-pointer text-[#a4aad84d] transition-all duration-300 hover:text-[#e55656] sm:mr-6"
                                onClick={() => handleDelete(item.id)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </div>
                    )
                )}
            <footer className="mb-6 flex justify-between rounded-b-md bg-[#24273D] py-3 px-4 text-xs tracking-widest text-[#A4AAD8] sm:py-5 sm:text-sm">
                <h1 className='hidden'>Todo Details and Clear all list items</h1>
                <p>
                    {listQuantity} {listQuantity === 1 ? 'item' : 'items'}
                </p>
                <p className="cursor-pointer" onClick={handleClearAllItems}>
                    Clear {listQuantity === 1 ? 'item' : 'items'}
                </p>
            </footer>
        </section>
    );
};

export default List;
