import { SetStateAction, useEffect, useState } from 'react';
import getLocalStorage from '../getLocalStorage';
import Form from './Form';
import Header from './Header';
import List from './List';

export interface IList {
    checked: Boolean,
    id: number
    message: string
}

const Todo = () => {
    const [list, setList] = useState<IList[]>();
    useEffect(() => setList(getLocalStorage()), []);

    return (
        <>
            <Header />
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
