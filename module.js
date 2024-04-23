export const new_way = () => {
    const way_1 = new Promise(async (resolve, reject) => {
        let array = [`akram`, 1, `saleem`, 2, `anusha`, 3, `anupama`, 4];
        if (array.length > 0 && array.lastIndexOf(4) !== -1) {
            resolve(`It`);
        }
        else {
            reject(`false`);
        }
    });
    const way_2 = new Promise((resolve, reject) => {
        let array = [1, 2, 3, 4];
        if (array.slice(3).every((num) => num === 4)) {
            resolve(`is`);
        }
        else {
            reject(`false`);
        }
    });
    const way_3 = new Promise((resolve, reject) => {
        let array = [`akram`, `saleem`, `anusha`, `anupama`];
        if (Array.isArray(array) === true) {
            resolve(`true`);
        }
        else {
            reject(`false`);
        }
    });
    return Promise.all([way_1, way_2, way_3])
        .then((results) => {
        console.log(`Yes all condition are executed to be ${results}`);
    })
        .catch((error) => {
        console.log(`No all condition are not executed to be ${error}`);
    });
};
