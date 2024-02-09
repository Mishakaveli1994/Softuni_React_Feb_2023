// import { Fragment } from 'react';

import { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { UserList } from './components/userList.js';
import { Pagination } from './components/Pagination.js';

import * as userService from './services/userService';
// import { sleep, throttle } from './utils/generalUtils.js';

function App() {
    // ! As useEffect can't use async/await, we have to use a nested function
    // useEffect(() => {
    //     async function getUsers() {
    //         const users = await userService.getAll();
    //     }

    //     getUsers();
    // });

    const [users, setUsers] = useState([]);
    const [activeQuery, setActiveQuery] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [maxPages, setMaxPages] = useState(1);
    const [query, setQuery] = useState({
        sort: '',
        order: '',
        search: '',
        criteria: '',
        limit: 5,
        page: 1
    });

    const searchHandler = () => {
        getAllUsers(query);
    };

    const sortHandler = () => {
        getAllUsers(query);
    };

    const handleLimitChange = (e) => {
        let currentQuery = { ...query };
        currentQuery.limit = parseInt(e.target.value);
        currentQuery.page = 1;
        setQuery(currentQuery);

        getAllUsers(currentQuery);
    };

    const handlePageChange = (e, shift) => {
        e.preventDefault();
        let currentQuery = { ...query };

        let changeToPage;
        if (shift === 'first') {
            changeToPage = 1;
        } else if (shift === 'prev') {
            changeToPage = currentQuery.page - 1;
        } else if (shift === 'next') {
            changeToPage = currentQuery.page + 1;
        } else if (shift === 'last') {
            changeToPage = maxPages;
        }
        if (changeToPage >= 1 && changeToPage <= maxPages) {
            currentQuery.page = changeToPage;
            setQuery(currentQuery);

            getAllUsers(currentQuery);
        }
    };

    const getAllUsers = (limit, page) => {
        setActiveQuery(true);
        userService
            .getAll(limit, page)
            .then((users) => {
                setUsers(users.users);
                setMaxPages(users.pages);
            })
            .catch((error) => {
                console.log(error);
                setFetchError(true);
            })
            .finally(() => {
                setActiveQuery(false);
            });
    };

    const onUserCreateSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        setActiveQuery(true);
        userService
            .createUser(data)
            .then((createdUser) => {
                setUsers((state) => [createdUser, ...users]);
            })
            .catch((error) => {
                console.log(error);
                setFetchError(true);
            })
            .finally(() => {
                setActiveQuery(false);
            });
    };

    const onUserUpdateSubmit = (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);
        setActiveQuery(true);
        userService
            .updateUser(userId, data)
            .then((updatedUser) => {
                setUsers((state) =>
                    state.map((u) => (u._id === userId ? updatedUser : u))
                );
            })
            .catch((error) => {
                console.log(error);
                setFetchError(true);
            })
            .finally(() => {
                setActiveQuery(false);
            });
    };

    const onUserInfo = (userId) => {
        setActiveQuery(true);
        return userService
            .getOne(userId)
            .then((user) => {
                return user;
            })
            .catch((error) => {
                console.log(error);
                setFetchError(true);
            })
            .finally(() => {
                setActiveQuery(false);
            });
    };

    const onUserDelete = async (userId) => {
        setActiveQuery(true);
        await userService.deleteUser(userId);
        await getAllUsers(query);
    };

    // ? Better way
    useEffect(() => {
        getAllUsers(query);
    }, []);

    return (
        // <Fragment> - below is the shorthand
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search
                        query={query}
                        setQuery={setQuery}
                        searchHandler={searchHandler}
                    />
                    <UserList
                        users={users}
                        onUserInfo={onUserInfo}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        activeQuery={activeQuery}
                        fetchError={fetchError}
                        query={query}
                        setQuery={setQuery}
                        sortHandler={sortHandler}
                    />
                    <Pagination
                        handleLimitChange={handleLimitChange}
                        handlePageChange={handlePageChange}
                        page={query.page}
                        maxPages={maxPages}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
