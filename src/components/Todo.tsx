// packages
import { useEffect, useState } from 'react';

// components
import getLocalStorage from '../getLocalStorage';
import { Header } from '../utils/Header';
import Form from './Form';
import List from './List';

export interface IList {
    checked: Boolean;
    id: number;
    message: string;
}

const Todo = () => {
    const [list, setList] = useState<IList[]>();
    useEffect(() => setList(getLocalStorage()), []);

    return (
        <>
            <Header />
            <header className="text-white transition-all duration-500 sm:m-auto sm:mt-52 sm:max-w-[640px] ">
                <h1 className="ml-6 mt-6 font-lato text-4xl font-semibold tracking-widest sm:ml-4 sm:text-6xl">
                    TODO
                </h1>
            </header>
            <span className="absolute top-0 left-0 -z-50 h-56 w-full bg-bloom bg-[length:130%] bg-center bg-no-repeat transition-all duration-500 sm:h-[456px]" />
            <main className="sm:m-auto sm:max-w-[640px]">
                <section className="mx-3 mt-32 transition-all duration-500 sm:mt-8">
                    <Form setList={setList} />
                    <List list={list} setList={setList} />
                </section>
            </main>
        </>
    );
};

export default Todo;
