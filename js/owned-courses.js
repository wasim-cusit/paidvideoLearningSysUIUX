/**
 * Student course locking – owned courses stored in localStorage
 * Key: learnvault_owned = JSON array of course IDs, e.g. ["1","2"]
 */
window.LearnVaultOwned = {
  key: 'learnvault_owned',

  get: function() {
    try {
      var raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  add: function(courseId) {
    var list = this.get();
    var id = String(courseId);
    if (list.indexOf(id) === -1) {
      list.push(id);
      localStorage.setItem(this.key, JSON.stringify(list));
    }
  },

  has: function(courseId) {
    return this.get().indexOf(String(courseId)) !== -1;
  }
};
