import { useRef, useState } from 'react';
import addToLocalStorage from '../addToLocalStorage';
import getLocalStorage from '../getLocalStorage';

const Form = ({ setList }: any) => {
    const inputValueRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        let value: string | null = inputValueRef.current!.value;
        const id = Math.floor(
            Math.random() * 1000000000 * Math.random() * 1000000000
        ); // random ID
        const checked: Boolean = false

        value ? addToLocalStorage(value, id, checked) : console.log(value);

        inputValueRef.current!.value = '';

        setList(getLocalStorage());
    };

    return (
        <form className="flex font-josefin shadow-xl" onSubmit={handleSubmit}>
            <label className="hidden">Todo</label>
            <button className="flex cursor-pointer items-center rounded-l-md bg-[#24273D]">
                <span className="relative my-4 mx-7 inline-block h-7 w-7 rounded-full border border-solid border-[#a4aad84d] text-[#a4aad8] sm:my-7 sm:h-10 sm:w-10">
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[#a4aad8] sm:text-2xl">
                        +
                    </p>
                </span>
            </button>
            <input
                ref={inputValueRef}
                type="text"
                placeholder="Create a new todo..."
                className=" w-full rounded-r-md bg-[#24273D] text-[#a4aad8] outline-none placeholder:text-sm placeholder:tracking-widest placeholder:text-[#a4aad833] sm:placeholder:text-base"
            />
        </form>
    );
};

export default Form;

export const handleListUpdate = (newList: any) => {
    const [list, setList] = useState();
    setList(newList);
    return list;
};
