const csv = require('csvtojson');
const { error } = require('node:console');
const fs = require('node:fs');
const ndjson = require('ndjson');

// refer to ACTS pairwise test plans
// e.g. multiple converters to use different sets of options

const in_fpath = __dirname + '/InputFiles/input1.csv';
const out_fpath = __dirname + '/OutputFiles/output5.json';
const err_fpath = __dirname + '/ErrorMessages/error5.json';
const exp_fpath = __dirname + '/ExpectedOutputs/expected5.json';

// const converter1 = csv({
//     output: "json",
//     quote: "off",
//     trim: false,
//     checkType: false,
//     ignoreEmpty: false,
//     noheader: false,
//     flatKeys: false,
//     checkColumn: false,
//     colParser: {
//         "Col1": "number",
//     },
//     nullObject: false,
//     // downstreamFormat: "array",
// });

// converter1
//     .fromFile(in_fpath)
//     .then((jsonObj) => {
//         fs.writeFile(out_fpath, JSON.stringify(jsonObj), { flag: 'a+' }, err => {
//             if (err) {
//                 fs.writeFile(err_fpath, err, { flag: 'a+' }, err => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 })
//             }
//             else {
//                 console.log("converter1 write successful");
//             }
//         })
//     });


// const converter2 = csv({
//     output: "json",
//     quote: "\"",
//     trim: true,
//     checkType: true,
//     ignoreEmpty: true,
//     noheader: true,
//     flatKeys: true,
//     checkColumn: true,
//     colParser: {
//         "Col1": "string",
//     },
//     nullObject: true,
//     downstreamFormat: "line",
// });

// converter2
//     .fromFile(in_fpath)
//     .on('data', (data) => {
//         // write converted data to file
//         fs.writeFile(out_fpath, JSON.stringify(data), { flag: 'w+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
//             }
//             else {
//                 console.log("CONVERTER2 WRITE SUCCESSFUL!");
//             }
//         })
//     })
//     .on('error', (err) => {
//         // write error msg to file
//         fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
//             }
//         })
//         // console.log("error in converter2: " + err + " --- typeof err: " + typeof err);
//     })


// const converter3 = csv({
//     output: "csv",
//     quote: "off",
//     trim: true,
//     checkType: false,
//     ignoreEmpty: true,
//     noheader: false,
//     flatKeys: true,
//     checkColumn: false,
//     colParser: {
//         "Col1": "string",
//     },
//     nullObject: false,
//     downstreamFormat: "line",
// });

// converter3
//     .fromFile(in_fpath)
//     .on('data', (data) => {
//         // write converted data to file
//         fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
//             }
//             else {
//                 console.log("CONVERTER3 WRITE SUCCESSFUL!");
//             }
//         })
//     })
//     .on('error', (err) => {
//         // write error msg to file
//         console.log("converter3 encountered error: " + err);
//         fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'a+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
//             }
//         })
//         // console.log("error in converter2: " + err + " --- typeof err: " + typeof err);
//     })


// const converter4 = csv({
//     output: "csv",
//     quote: "\"",
//     trim: false,
//     checkType: true,
//     ignoreEmpty: false,
//     noheader: true,
//     flatKeys: false,
//     checkColumn: true,
//     colParser: {
//         "Col1": "number",
//     },
//     nullObject: false,
//     downstreamFormat: "array",
// });

// converter4
//     .fromFile(in_fpath)
//     .on('data', (data) => {
//         // write converted data to file
//         fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
//             }
//             else {
//                 console.log("CONVERTER4 WRITE SUCCESSFUL!");
//             }
//         })
//     })
//     .on('error', (err) => {
//         // write error msg to file
//         console.log("converter4 encountered error: " + err);
//         fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'a+' }, err => {
//             if (err) {
//                 console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
//             }
//         })
//     })

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
    .on('data', (data) => {
        // write converted data to file
        fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
            if (err) {
                console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
            }
            else {
                console.log("CONVERTER5 WRITE SUCCESSFUL!");
            }
        })
    })
    .on('error', (err) => {
        // write error msg to file
        console.log("converter5 encountered error: " + err);
        fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'a+' }, err => {
            if (err) {
                console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
            }
        })
    })

/*
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