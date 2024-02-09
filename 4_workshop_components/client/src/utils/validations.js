export const validateFirstName = (firstName, setError) => {
    if (firstName.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.firstName = ['First name is required!'];
            return oldStateCopy;
        });
    } else if (firstName.length < 3) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.firstName = [
                'First name must be at least 3 characters long'
            ];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.firstName = [];
            return oldStateCopy;
        });
    }
};

export const validateLastName = (lastName, setError) => {
    if (lastName.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.lastName = ['Last name is required!'];
            return oldStateCopy;
        });
    } else if (lastName.length < 3) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.lastName = [
                'Last name must be at least 3 characters long'
            ];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.lastName = [];
            return oldStateCopy;
        });
    }
};

export const validateEmail = (email, setError) => {
    if (email.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.email = ['Email is required!'];
            return oldStateCopy;
        });
    } else if (!/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(email)) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.email = ['Please provide a valid email address!'];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.email = [];
            return oldStateCopy;
        });
    }
};

export const validateImageUrl = (imageUrl, setError) => {
    if (imageUrl.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.imageUrl = ['Image URL is required!'];
            return oldStateCopy;
        });
    } else if (!imageUrl.startsWith('https://')) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.imageUrl = ['Image URL must start with https://'];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.imageUrl = [];
            return oldStateCopy;
        });
    }
};

export const validatePhoneNumber = (phoneNumber, setError) => {
    if (phoneNumber.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.email = ['Phone number is required!'];
            return oldStateCopy;
        });
    } else if (!/^0[1-9]{1}[0-9]{8}$/.test(phoneNumber)) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.phoneNumber = ['Please provide a valid phone number!'];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.phoneNumber = [];
            return oldStateCopy;
        });
    }
};

export const validateCountry = (country, setError) => {
    if (country.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.country = ['Country is required!'];
            return oldStateCopy;
        });
    } else if (country.length < 2) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.country = [
                'Country must be at least 2 characters long'
            ];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.country = [];
            return oldStateCopy;
        });
    }
};

export const validateCity = (city, setError) => {
    if (city.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.city = ['City is required!'];
            return oldStateCopy;
        });
    } else if (city.length < 3) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.city = ['City must be at least 3 characters long'];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.city = [];
            return oldStateCopy;
        });
    }
};

export const validateStreet = (street, setError) => {
    if (street.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.street = ['Street is required!'];
            return oldStateCopy;
        });
    } else if (street.length < 2) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.street = ['Street must be at least 3 characters long'];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.street = [];
            return oldStateCopy;
        });
    }
};

export const validateStreetNumber = (streetNumber, setError) => {
    if (streetNumber.length === 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.streetNumber = ['Street number is required!'];
            return oldStateCopy;
        });
    } else if (streetNumber.length < 2 && streetNumber > 0) {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.streetNumber = [
                'Street number must be at least 2 characters long and be a positive number'
            ];
            return oldStateCopy;
        });
    } else {
        setError((oldState) => {
            let oldStateCopy = { ...oldState };
            oldStateCopy.streetNumber = [];
            return oldStateCopy;
        });
    }
};

export const checkForValidationErrors = (error) => {
    return Object.values(error).reduce((a, b) => a + b.length, 0);
};
