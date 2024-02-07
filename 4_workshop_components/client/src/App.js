// import { Fragment } from 'react';

import { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { UserList } from './components/userList.js';
import { Pagination } from './components/Pagination.js';

import * as userService from './services/userService';

function App() {
    // ! As useEffect can't use async/await, we have to use a nested function
    // useEffect(() => {
    //     async function getUsers() {
    //         const users = await userService.getAll();
    //     }

    //     getUsers();
    // });

    const [users, setUsers] = useState([]);

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        const createdUser = await userService.createUser(data);

        setUsers((state) => [createdUser, ...users]);
    };

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        const createdUser = await userService.updateUser(userId, data);

        setUsers((state) =>
            state.map((u) => (u._id === userId ? createdUser : u))
        );
    };

    const onUserDelete = async (userId) => {
        await userService.deleteUser(userId);

        setUsers((state) => state.filter((u) => u._id !== userId));
    };

    // ? Better way
    useEffect(() => {
        userService
            .getAll()
            .then((users) => {
                setUsers(users);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        // <Fragment> - below is the shorthand
        <>
            {/* <!-- Header component --> */}
            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                {/* <!-- Section component  --> */}
                <section className="card users-container">
                    {/* <!-- Search bar component --> */}
                    <Search />

                    {/* <!-- Table component --> */}
                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                    />

                    {/* <!-- Pagination component  --> */}
                    <Pagination />
                </section>

                {/* <!-- Create/Edit Form component  --> */}

                {/* <!-- Delete user component  --> */}
            </main>
            {/* <!-- Footer component  --> */}
            <Footer />
        </>
    );
}

export default App;
