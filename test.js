var expect = require('chai').expect;
var avg = require('./index.js');

describe('Tests for checking avg', function () {
  it('should return an avg no of positive numbers', function () {
    expect(avg([1, 2, 3, 4, 5])).to.be.eql(3);
  });

  it('should return an avg no of mixed numbers', function () {
    expect(avg([-1, 2, -3, 4, 5])).to.be.eql(1.4);
  });
});
