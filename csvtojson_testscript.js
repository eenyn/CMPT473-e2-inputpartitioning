const csv = require('csvtojson');
const fs = require('node:fs');
const ndjson = require('ndjson');

import { expect } from 'chai';

// refer to ACTS pairwise test plans
// e.g. multiple converters to use different sets of options

describe("converter1()", () => {
    it("should match expected JSON as seen in expected1.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output1.json';
        const err_fpath = __dirname + '/ErrorMessages/error1.txt';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected1.json';

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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER1 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, err, { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected output
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter2()", () => {
    it("should match expected JSON as seen in expected2.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output2.json';
        const err_fpath = __dirname + '/ErrorMessages/error2.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected2.json';
    
        const converter2 = csv({
            output: "json",
            quote: "\"",
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

        converter2
            .fromFile(in_fpath)
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER2 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter3()", () => {
    it("should match expected JSON as seen in expected3.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output3.json';
        const err_fpath = __dirname + '/ErrorMessages/error3.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected3.json';

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

        converter3
            .fromFile(in_fpath)
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER3 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter4()", () => {
    it("should match expected JSON as seen in expected4.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output4.json';
        const err_fpath = __dirname + '/ErrorMessages/error4.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected4.json';
        
        const converter4 = csv({
            output: "csv",
            quote: "\"",
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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER4 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter5()", () => {
    it("should match expected JSON as seen in expected5.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output5.json';
        const err_fpath = __dirname + '/ErrorMessages/error5.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected5.json';
        
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
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter6()", () => {
    it("should match expected JSON as seen in expected6.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output6.json';
        const err_fpath = __dirname + '/ErrorMessages/error6.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected6.json';
        
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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER6 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter7()", () => {
    it("should match expected JSON as seen in expected7.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output7.json';
        const err_fpath = __dirname + '/ErrorMessages/error7.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected7.json';
        
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
            nullObject: true,
            downstreamFormat: "array",
        });

        converter7
            .fromFile(in_fpath)
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER7 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter8()", () => {
    it("should match expected JSON as seen in expected8.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output8.json';
        const err_fpath = __dirname + '/ErrorMessages/error8.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected8.json';
        
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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER8 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter9()", () => {
    it("should match expected JSON as seen in expected9.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output9.json';
        const err_fpath = __dirname + '/ErrorMessages/error9.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected9.json';
        
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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER9 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})

describe("converter10()", () => {
    it("should match expected JSON as seen in expected10.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output10.json';
        const err_fpath = __dirname + '/ErrorMessages/error10.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected10.json';
        
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
            .on('data', (data) => {
                // write converted data to file
                fs.writeFile(out_fpath, data, { flag: 'a+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        console.log("CONVERTER10 WRITE SUCCESSFUL!");
                    }
                })
            })
            .on('error', (err) => {
                // write error msg to file
                fs.writeFile(err_fpath, JSON.stringify(err), { flag: 'w+' }, err => {
                    if (err) {
                        console.log("ERROR WRITING TO FILE: " + err_fpath + " --- " + err);
                    }
                })
            })
            .on('done', (err) => {
                // read expected error msg
                const expStr = '';
                fs.readFile(exp_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }
                    else {
                        expStr = JSON.stringify(data);
                    }
                })
                // read actual output
                const outStr = '';
                fs.readFile(out_fpath, (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                    }
                    else {
                        outStr = JSON.stringify(data);
                    }
                })
                expect(outStr).to.equal(expStr).and.not.be.empty;
            });
    })  
})