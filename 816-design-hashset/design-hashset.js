
// Learning points:
// - internal hashset (hash table) implementation: buckets arr + linked list + hash fn
// - power ** and modulo %
// - delete in array javascript, include in array javascript
// - this.
// - choosing bucket size
// -


// // Naive: use an array as large as the upper bound 10^6 + 1, 
// // key is index 
// // value: 0 means not present, 1 means present
// // add in O(1), remove in O(1), contains in O(1)
// var MyHashSet = function() {
//     this.set = new Array((10 ** 6) + 1).fill(0);
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function(key) {
//     this.set[key] = 1;
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function(key) {
//     this.set[key] = 0;
// };

// /** 
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function(key) {
//     return !!this.set[key];
// };
// */

var MyHashSet = function() {
    this.size = 12289;
    this.buckets = new Array(this.size).fill().map(() => new Array());
    this.hashFn = (num) => num % this.size;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this.hashFn(key);
    if (!this.buckets[idx].includes(key)) {
        this.buckets[idx].push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const bucketIdx = this.hashFn(key);
    const keyIdx = this.buckets[bucketIdx].indexOf(key);
    if (keyIdx !== -1) {
        this.buckets[bucketIdx].splice(keyIdx, 1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this.hashFn(key);
    return this.buckets[idx].includes(key);
};