/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    const promises = [];
    for(let i=0; i < operations.length; i++)
    {
        const operation = operations[i];
        const promise = new Promise(function (resolve, reject) {
            operation(function (err, data) {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        });
        promises.push(promise);

    }
    Promise.all(promises)
        .then(data => callback(null, data))
        .catch(error => callback(error));

};

