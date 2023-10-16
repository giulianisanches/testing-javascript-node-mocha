var assert = require("assert");

describe("Basic mocha test", function () {
  it("Should deal with objects", function () {
    let obj = { name: "Jon", gender: "male" };
    let objB = { name: "Jon", gender: "male" };

    obj.should.deep.equal(objB);
  });
});
