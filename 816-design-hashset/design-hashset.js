
// Naive: use a very large array 10^6 + 1, 
// key is index 
// value: 0 means not present, 1 means present
// add in O(1), remove in O(1), contains in O(1)
var MyHashSet = function() {
    this.set = new Array((10 ** 6) + 1).fill(0);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set[key] = 1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.set[key] = 0;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return !!this.set[key];
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */