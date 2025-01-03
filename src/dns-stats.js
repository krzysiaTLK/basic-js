const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};
  for (let i=0; i<domains.length; i+=1) {
    let keys = domains[i].split(".").reverse();
    let curDNS= '';
    keys.forEach(elem => {
    if (curDNS === '') {
    curDNS = `.${elem}`;
    } else {
    curDNS = `${curDNS}.${elem}`;
    }  
    DNSStats[curDNS] = (DNSStats[curDNS] || 0) + 1;
    });
  }
       
   return DNSStats;
 }

module.exports = {
  getDNSStats
};
