const csv = require('csvtojson');
const fs = require('node:fs');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised').default;
chai.use(chaiAsPromised);

// refer to ACTS pairwise test plans
// e.g. multiple converters to use different sets of options

describe("converter1()", () => {
    it("should match expected JSON as seen in expected1.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output1.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected1.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });

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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter2()", () => {
    it("should match expected JSON as seen in expected2.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output2.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected2.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
    
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                if (err) {
                    try {
                        fs.writeFileSync(out_fpath, JSON.stringify(err));
                        // file written successfully
                    } catch (err) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + err);
                    }
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    // console.log("converter2 expStr, typeof data: " + typeof data + ", " + data);
                    // expStr = JSON.stringify(data);
                    expStr = data.toString('utf-8');
                    // console.log("expStr: " + expStr);
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    // console.log("converter2 outStr, typeof data: " + typeof data + ", " + data);
                    // outStr = JSON.stringify(data);
                    outStr = data.toString('utf-8');
                    // console.log("outStr: " + outStr);
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                // chai.expect(outStr).to.equal(expStr).and.not.be.empty;
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter3()", () => {
    it("should match expected JSON as seen in expected3.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output3.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected3.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });

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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter4()", () => {
    it("should match expected JSON as seen in expected4.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output4.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected4.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter5()", function () {
    it("should match expected JSON as seen in expected5.json", function () {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output5.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected5.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });

        var expStr = '';
        var outStr = '';
        
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

        // async function convert() {
            converter5
                .fromFile(in_fpath)
                .on('data', (data) => {
                    try {
                        fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                        // file written successfully
                    } catch (fsErr) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                    }
                })
                .on('error', (err) => {
                    try {
                        fs.writeFileSync(out_fpath, JSON.stringify(err));
                        // file written successfully
                    } catch (fsErr) {
                        console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                    }
                })
                .on('done', function (err) {
                    try {
                        var data = fs.readFileSync(exp_fpath);
                        // console.log("converter2 expStr, typeof data: " + typeof data + ", " + data);
                        expStr = data.toString('utf-8');
                        console.log("expStr (inside .on): " + expStr);
                        data = fs.readFileSync(out_fpath, { flag: 'r' });
                        // console.log("converter2 outStr, typeof data: " + typeof data + ", " + data);
                        outStr = data.toString('utf-8');
                        console.log("outStr (inside .on): " + outStr);
                        // chai.expect(outStr).to.equal(expStr);
                    } catch (err) {
                        console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                    }

                    chai.expect(outStr).to.not.be.empty;
                    chai.expect(expStr).to.not.be.empty;
                    chai.expect(outStr).to.be.a("string");
                    chai.expect(expStr).to.be.a("string");
                    chai.expect(outStr).to.equal(expStr);
                    
                })
        // };

    })  
})

describe("converter6()", () => {
    it("should match expected JSON as seen in expected6.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output6.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected6.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter7()", () => {
    it("should match expected JSON as seen in expected7.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output7.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected7.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter8()", () => {
    it("should match expected JSON as seen in expected8.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output8.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected8.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter9()", () => {
    it("should match expected JSON as seen in expected9.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output9.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected9.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})

describe("converter10()", () => {
    it("should match expected JSON as seen in expected10.json", () => {
        const in_fpath = __dirname + '/InputFiles/input1.csv';
        const out_fpath = __dirname + '/OutputFiles/output10.json';
        const exp_fpath = __dirname + '/ExpectedOutputs/expected10.json';

        // reset/clear file
        fs.writeFile(out_fpath, '', err => { });
        
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
                try {
                    fs.writeFileSync(out_fpath, data, { flag: 'a+' });
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('error', (err) => {
                // write error msg to file
                try {
                    fs.writeFileSync(out_fpath, JSON.stringify(err));
                    // file written successfully
                } catch (fsErr) {
                    console.log("ERROR WRITING TO FILE: " + out_fpath + " --- " + fsErr);
                }
            })
            .on('done', (err) => {
                // read expected output
                var expStr = '';
                try {
                    const data = fs.readFileSync(exp_fpath);
                    expStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + exp_fpath + " --- " + err);
                }
                // read actual output
                var outStr = '';
                try {
                    const data = fs.readFileSync(out_fpath, { flag: 'r' });
                    outStr = data.toString('utf-8');
                } catch (err) {
                    console.log("ERROR READING FILE: " + out_fpath + " --- " + err);
                }
                chai.expect(outStr).to.not.be.empty;
                chai.expect(expStr).to.not.be.empty;
                chai.expect(outStr).to.equal(expStr);
            });
    })  
})