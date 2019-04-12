const connection = require('./connection'); // MySQL Server Connection

//test#1
function printQuestionMarks(num) {
    const arr = []

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//test#2
function objtosql(ob) {
    let arr = []

    for (let key in ob) {
        arr.push(key + "=" +ob[key]);
    }
    return arr.toString();
}

// error will be an Error if one occurred during the query
// results will contain the results of the query
// fields will contain information about the returned results fields (if any)
exports.all = function(table, cb) {
    const allSQL = `SELECT * FROM ${table}`
    connection.query(allSQL, function(error,results,fields) {
        if (error) throw error;
        console.log('all-results:', results); //works
        //console.log('all-fields:', fields); //works
        cb(results);
    });
};

// vals is an array of values that we want to save to columns
exports.create = function(table, cols, vals, cb) {
    const creatSQL = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
     connection.query(creatSQL, function(error,results,fields) {
        if (error) throw error;
        console.log('create-results:', results);
        console.log('create-fields:', fields);
        cb(results);
    });
};

exports.update = function(table, objColVals, condition, cb) {
    let updateSQL = `UPDATE ${table} SET ${objtosql(objColVals)} WHERE ${condition}`
    connection.query(updateSQL, function(error,results,fields) {
        if (error) throw error;
        console.log('update-results:',results);
        cb(results);
    });
};

//export orm.js into models/burger.js