"use sctirct"

class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    addItem(newItem) {
        this.#items.push(newItem)
    }
    removeItem(itemToRemove) {
        this.#items.splice(this.#items.indexOf(itemToRemove),1);
    }
    getItems() {
    return this.#items;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]