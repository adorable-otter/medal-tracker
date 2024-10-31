const storage = {
  storage: JSON.parse(localStorage.getItem('medalList') || '{}'),

  contains(id) {
    return Boolean(storage[id]);
  },

  add(target) {
    this.storage[target.id] = target;
    try {
      localStorage.setItem('medalList', JSON.stringify(this.storage));
    } catch {
      alert('더 이상 추가할 수 없습니다.');
      delete this.storage[target.id];
    }
  },

  delete(id) {
    delete this.storage[id];
    localStorage.setItem('medalList', JSON.stringify(this.storage));
  },

  getContents() {
    return { ...this.storage };
  },

  getContentList() {
    return Object.values(this.storage);
  },
};

export { storage };
