export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const throttle = (delay) => {
    let lastExecution = 0;
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const now = Date.now();
            if (now - lastExecution >= delay) {
                lastExecution = now;
                return originalMethod.apply(this, args);
            } else {
                console.log(`Method ${key} throttled.`);
            }
        };
    };
};
