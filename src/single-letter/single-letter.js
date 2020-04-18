'use strict';

(function singleLetter() {
  window.singleLetter = (string) => {
    const dummyResult = string.length > 0 ? string[0] : 'n';

    return dummyResult;
  };
}());
