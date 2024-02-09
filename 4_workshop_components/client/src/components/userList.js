import { User } from './User';
import { useState } from 'react';
import { UserDetails } from './UserDetails';
import * as userService from '../services/userService';
import { SaveUser } from './SaveUser.js';
import { DeleteUser } from './DeleteUser.js';
import { Spinner } from './Spinner.js';
import { NoUsers } from './NoUsers.js';
import { FetchError } from './FetchError';

export const UserList = ({
    users,
    onUserInfo,
    onUserCreateSubmit,
    onUserDelete,
    onUserUpdateSubmit,
    activeQuery,
    fetchError,
    query,
    setQuery,
    sortHandler
}) => {
    const [pageAction, setPageAction] = useState({ action: null });

    const onSortClick = (field) => {
        let currentSort = { ...query };
        currentSort.sort = field;
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
        setQuery(currentSort);
        sortHandler()
    };

    const onInfoClick = async (userId) => {
        const user = await onUserInfo(userId);
        setPageAction({ action: 'info', user });
    };

    const onUserAddClick = () => {
        setPageAction({ action: 'add' });
    };

    const onCLose = () => {
        setPageAction({ action: null });
    };

    const onUserCreateSubmitHandler = (e) => {
        onUserCreateSubmit(e);
        setPageAction({ action: null });
    };

    const onUserUpdateSubmitHandler = (e, userId) => {
        onUserUpdateSubmit(e, userId);
        setPageAction({ action: null });
    };

    const onDeleteClick = (userId) => {
        setPageAction({ action: 'delete', userId });
    };

    const onDeleteHandler = () => {
        onUserDelete(pageAction.userId);
        onCLose();
    };

    const onEditClick = async (userId) => {
        const user = await userService.getOne(userId);
        setPageAction({ action: 'edit', user });
    };

    return (
        <>
            {/* <!-- User details component  --> */}
            {!fetchError && pageAction.action === 'info' && (
                <UserDetails {...pageAction.user} onClose={onCLose} />
            )}
            {!fetchError && pageAction.action === 'add' && (
                <SaveUser
                    onClose={onCLose}
                    onUserCreateSubmit={onUserCreateSubmitHandler}
                />
            )}
            {!fetchError && pageAction.action === 'delete' && (
                <DeleteUser onClose={onCLose} onDelete={onDeleteHandler} />
            )}
            {!fetchError && pageAction.action === 'edit' && (
                <SaveUser
                    onClose={onCLose}
                    user={pageAction.user}
                    onUserCreateSubmit={onUserUpdateSubmitHandler}
                />
            )}
            <div className="table-wrapper">
                {!fetchError && users.length === 0 && !activeQuery && (
                    <NoUsers />
                )}
                {fetchError && <FetchError />}
                {activeQuery && <Spinner />}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th onClick={() => onSortClick('firstName')}>
                                First name
                                <svg
                                    transform={`rotate(${
                                        query.order === 'asc' ? 180 : 0
                                    })`}
                                    className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                        query.field === 'firstName'
                                            ? 'active-icon'
                                            : ''
                                    }`.trim()}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th onClick={() => onSortClick('lastName')}>
                                Last name
                                <svg
                                    transform={`rotate(${
                                        query.order === 'asc' ? 180 : 0
                                    })`}
                                    className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                        query.field === 'lastName'
                                            ? 'active-icon'
                                            : ''
                                    }`.trim()}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th onClick={() => onSortClick('email')}>
                                Email
                                <svg
                                    transform={`rotate(${
                                        query.order === 'asc' ? 180 : 0
                                    })`}
                                    className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                        query.field === 'email'
                                            ? 'active-icon'
                                            : ''
                                    }`.trim()}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th onClick={() => onSortClick('phone')}>
                                Phone
                                <svg
                                    transform={`rotate(${
                                        query.order === 'asc' ? 180 : 0
                                    })`}
                                    className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                        query.field === 'phone'
                                            ? 'active-icon'
                                            : ''
                                    }`.trim()}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th onClick={() => onSortClick('created')}>
                                Created
                                <svg
                                    transform={`rotate(${
                                        query.order === 'asc' ? 180 : 0
                                    })`}
                                    className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                        query.field === 'created'
                                            ? 'active-icon'
                                            : ''
                                    }`.trim()}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Table row component --> */}
                        {!fetchError &&
                            users.map((u) => (
                                <User
                                    {...u}
                                    key={u._id}
                                    onInfoClick={onInfoClick}
                                    onDeleteClick={onDeleteClick}
                                    onEditClick={onEditClick}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={onUserAddClick}>
                Add new user
            </button>
        </>
    );
};
