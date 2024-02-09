import { useState } from 'react';
import * as FormValidations from '../utils/validations';

export const SaveUser = ({ user, onClose, onUserCreateSubmit }) => {
    const [error, setError] = useState({
        firstName: !user ? ['First name is required'] : [],
        lastName: !user ? ['Last name is required'] : [],
        email: !user ? ['Email is required'] : [],
        imageUrl: !user ? ['Image URL is required'] : [],
        phoneNumber: !user ? ['Phone number is required'] : [],
        country: !user ? ['Country is required'] : [],
        city: !user ? ['City is required'] : [],
        street: !user ? ['Street is required'] : [],
        streetNumber: !user ? ['Street number is required'] : []
    });

    return (
        <div className="overlay">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User/Add User</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="xmark"
                                className="svg-inline--fa fa-xmark"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                ></path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={(e) => onUserCreateSubmit(e, user?._id)}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        defaultValue={user?.firstName}
                                        onChange={(e) =>
                                            FormValidations.validateFirstName(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                        // onBlur={(e) =>
                                        //     validateFirstName(e.target.value)
                                        // }
                                    />
                                </div>
                                {error.firstName && (
                                    <p className="form-error">
                                        {error.firstName}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        defaultValue={user?.lastName}
                                        onChange={(e) =>
                                            FormValidations.validateLastName(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.lastName && (
                                    <p className="form-error">
                                        {error.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-envelope"></i>
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        defaultValue={user?.email}
                                        onChange={(e) =>
                                            FormValidations.validateEmail(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.email && (
                                    <p className="form-error">{error.email}</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">
                                    Phone number
                                </label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        defaultValue={user?.phoneNumber}
                                        onChange={(e) =>
                                            FormValidations.validatePhoneNumber(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.phoneNumber && (
                                    <p className="form-error">
                                        {error.phoneNumber}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span>
                                    <i className="fa-solid fa-image"></i>
                                </span>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    defaultValue={user?.imageUrl}
                                    onChange={(e) =>
                                        FormValidations.validateImageUrl(
                                            e.target.value,
                                            setError
                                        )
                                    }
                                />
                            </div>
                            {error.imageUrl && (
                                <p className="form-error">{error.imageUrl}</p>
                            )}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-map"></i>
                                    </span>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        defaultValue={user?.address.country}
                                        onChange={(e) =>
                                            FormValidations.validateCountry(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.country && (
                                    <p className="form-error">
                                        {error.country}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-city"></i>
                                    </span>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        defaultValue={user?.address.city}
                                        onChange={(e) =>
                                            FormValidations.validateCity(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.city && (
                                    <p className="form-error">{error.city}</p>
                                )}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-map"></i>
                                    </span>
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        defaultValue={user?.address.street}
                                        onChange={(e) =>
                                            FormValidations.validateStreet(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.street && (
                                    <p className="form-error">{error.street}</p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">
                                    Street number
                                </label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-house-chimney"></i>
                                    </span>
                                    <input
                                        id="streetNumber"
                                        name="streetNumber"
                                        type="text"
                                        defaultValue={
                                            user?.address.streetNumber
                                        }
                                        onChange={(e) =>
                                            FormValidations.validateStreetNumber(
                                                e.target.value,
                                                setError
                                            )
                                        }
                                    />
                                </div>
                                {error.streetNumber && (
                                    <p className="form-error">
                                        {error.streetNumber}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div id="form-actions">
                            <button
                                id="action-save"
                                className="btn"
                                type="submit"
                                disabled={FormValidations.checkForValidationErrors(
                                    error
                                ) ? true : false}
                            >
                                Save
                            </button>
                            <button
                                id="action-cancel"
                                className="btn"
                                type="button"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
