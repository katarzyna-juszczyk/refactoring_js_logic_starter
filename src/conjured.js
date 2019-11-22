const Item = require("./item");

// make change easy and then make the easy change
class Conjured extends Item {
    update() {
        this.quality = this.quality - 2;
        if (this.sellIn <= 0) this.quality = this.quality - 2;
        if(this.quality < 0) this.quality = 0;
        this.sellIn = this.sellIn - 1;
    }
}

module.exports = Conjured;