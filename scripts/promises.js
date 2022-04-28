let promise = new Promise((resolve, reject) => {
    // opening the file
    let isOpened = true;
    if (isOpened) {
        resolve("Opened");
    }
    else {
        reject("Not Opened");
    }
});
promise.then((fromResolve) => {
    console.log(fromResolve);
}).catch((fromRejected) => {
    console.log(fromRejected);
});
//# sourceMappingURL=promises.js.map