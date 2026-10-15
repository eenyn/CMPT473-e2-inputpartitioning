const csv = require('csvtojson');
const { error } = require('node:console');
const fs = require('node:fs');

// refer to ACTS pairwise test plans
// e.g. multiple converters to use different sets of options

const in_fpath = './InputFiles/input1.csv';
const out_fpath = './OutputFiles/output1.json';
const err_fpath = 'errpath';

const converter1 = csv({
    output: "json",
    quote: "off",
    trim: false,
    checkType: false,
    ignoreEmpty: false,
    noheader: false,
    flatKeys: false,
    checkColumn: false,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "array",
});

converter1
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile(out_fpath, JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("write successful");
            }
        })
    });

const converter4 = csv({
    output: "csv",
    quote: "off",
    trim: false,
    checkType: true,
    ignoreEmpty: false,
    noheader: true,
    flatKeys: false,
    checkColumn: true,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "array",
});

converter4
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output4.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output4 write successful");
            }
        })
    });

const converter5 = csv({
    output: "line",
    quote: "off",
    trim: true,
    checkType: true,
    ignoreEmpty: false,
    noheader: false,
    flatKeys: true,
    checkColumn: true,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "line",
});

converter5
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output5.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output5 write successful");
            }
        })
    });

const converter6 = csv({
    output: "line",
    quote: "\"",
    trim: false,
    checkType: false,
    ignoreEmpty: true,
    noheader: true,
    flatKeys: false,
    checkColumn: false,
    colParser: {
        "Col1": "string",
    },
    nullObject: false,
    downstreamFormat: "array",
});

converter6
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output6.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output6 write successful");
            }
        })
    });

// const converter7 = csv({
//     output: "json",
//     quote: "off",
//     trim: false,
//     checkType: false,
//     ignoreEmpty: false,
//     noheader: true,
//     flatKeys: true,
//     checkColumn: true,
//     colParser: {
//         "Col1": "string",
//     },
//     nullObject: true,
//     downstreamFormat: "array",
// });

// converter7
//     .fromFile(in_fpath)
//     .then((jsonObj) => {
//         fs.writeFile('./OutputFiles/output7.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
//             if (err) {
//                 fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }
//             else {
//                 console.log("output7 write successful");
//             }
//         })
//     });

const converter8 = csv({
    output: "json",
    quote: "\"",
    trim: true,
    checkType: true,
    ignoreEmpty: true,
    noheader: false,
    flatKeys: false,
    checkColumn: false,
    colParser: {
        "Col1": "number",
    },
    nullObject: true,
    downstreamFormat: "line",
});

converter8
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output8.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output8 write successful");
            }
        })
    });

const converter9 = csv({
    output: "json",
    quote: "\"",
    trim: false,
    checkType: false,
    ignoreEmpty: true,
    noheader: true,
    flatKeys: true,
    checkColumn: false,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "line",
});

converter9
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output9.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output9 write successful");
            }
        })
    });

const converter10 = csv({
    output: "csv",
    quote: "off",
    trim: true,
    checkType: false,
    ignoreEmpty: true,
    noheader: true,
    flatKeys: true,
    checkColumn: true,
    colParser: {
        "Col1": "string",
    },
    nullObject: false,
    downstreamFormat: "array",
});

converter10
    .fromFile(in_fpath)
    .then((jsonObj) => {
        fs.writeFile('./OutputFiles/output10.json', JSON.stringify(jsonObj), { flag: 'w+' }, err => {
            if (err) {
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            else {
                console.log("output10 write successful");
            }
        })
    });


/*
const converter2 = csv({
    output: "json",
    quote: "double",
    trim: true,
    checkType: true,
    ignoreEmpty: true,
    noheader: true,
    flatKeys: true,
    checkColumn: true,
    colParser: {
        "Col1": "string",
    },
    nullObject: true,
    downstreamFormat: "line",
});

const converter3 = csv({
    output: "csv",
    quote: "off",
    trim: true,
    checkType: false,
    ignoreEmpty: true,
    noheader: false,
    flatKeys: true,
    checkColumn: false,
    colParser: {
        "Col1": "string",
    },
    nullObject: false,
    downstreamFormat: "line",
});

const converter4 = csv({
    output: "csv",
    quote: "double",
    trim: false,
    checkType: true,
    ignoreEmpty: false,
    noheader: true,
    flatKeys: false,
    checkColumn: true,
    colParser: {
        "Col1": "number",
    },
    nullObject: true,
    downstreamFormat: "array",
});

const converter5 = csv({
    output: "line",
    quote: "off",
    trim: true,
    checkType: true,
    ignoreEmpty: false,
    noheader: false,
    flatKeys: true,
    checkColumn: true,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "line",
});

const converter6 = csv({
    output: "line",
    quote: "double",
    trim: false,
    checkType: false,
    ignoreEmpty: true,
    noheader: true,
    flatKeys: false,
    checkColumn: false,
    colParser: {
        "Col1": "string",
    },
    nullObject: true,
    downstreamFormat: "array",
});

const converter7 = csv({
    output: "json",
    quote: "off",
    trim: false,
    checkType: false,
    ignoreEmpty: false,
    noheader: true,
    flatKeys: true,
    checkColumn: true,
    colParser: {
        "Col1": "string",
    },
    nullObject: false,
    downstreamFormat: "line",
});

const converter8 = csv({
    output: "csv",
    quote: "double",
    trim: true,
    checkType: true,
    ignoreEmpty: true,
    noheader: false,
    flatKeys: false,
    checkColumn: false,
    colParser: {
        "Col1": "number",
    },
    nullObject: true,
    downstreamFormat: "array",
});

const converter9 = csv({
    output: "csv",
    quote: "off",
    trim: false,
    checkType: false,
    ignoreEmpty: true,
    noheader: false,
    flatKeys: false,
    checkColumn: true,
    colParser: {
        "Col1": "number",
    },
    nullObject: true,
    downstreamFormat: "line",
});

const converter10 = csv({
    output: "line",
    quote: "double",
    trim: true,
    checkType: true,
    ignoreEmpty: true,
    noheader: false,
    flatKeys: true,
    checkColumn: false,
    colParser: {
        "Col1": "number",
    },
    nullObject: false,
    downstreamFormat: "array",
});

*/