var assert = require("assert");
let should = require("chai").should();

describe("Basic mocha test", function () {
  it("Should deal with objects", function () {
    let obj = { name: "Jon", gender: "male" };
    let objB = { name: "Jon", gender: "male" };

    obj.should.deep.equal(objB);
  });

  it("Should allow testing nulls", function () {
    let iAmNull = null;
    should.not.exist(iAmNull);
  });
});
