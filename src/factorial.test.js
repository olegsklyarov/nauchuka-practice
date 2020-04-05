'use strict';

describe('Задача Факториал', () => {
    // https://oeis.org/A000142
    const A000142 = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800,
        87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000,
        2432902008176640000,
    ];
    for (let n = 0; n < A000142.length; n++) {
        const expectedResult = A000142[n];
        const actualResult = factorial(n);
        const description = `${n}! = ${expectedResult}`;
        it(description, () => chai.assert.equal(actualResult, expectedResult, description));
    }
});
