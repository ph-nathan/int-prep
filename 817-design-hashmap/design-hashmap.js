

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

 
// Naive: create an array of len max possible key size
// var MyHashMap = function() {
//     this.arr = new Array(10 ** 6 + 1).fill(-1);
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function(key, value) {
//     this.arr[key] = value;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function(key) {
//     return this.arr[key];
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function(key) {
//     this.arr[key] = -1;
// };

// Optimal:
var MyHashMap = function() {
    this.size = 12289;
    this.buckets = new Array(this.size).fill(null).map(() => new Array());
    this.hashFn = (key) => key % this.size;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const bucketIdx = this.hashFn(key);
    const bucket = this.buckets[bucketIdx];

    for (const pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value;
            return;
        }
    }
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const bucketIdx = this.hashFn(key);
    const bucket = this.buckets[bucketIdx];

    for (const pair of bucket) {
        if (pair[0] === key) {
            return pair[1];
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const bucketIdx = this.hashFn(key);
    const bucket = this.buckets[bucketIdx];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
        }
    }
};
