const test = require("tape");
const Item = require("./item");
const Shop = require("./shop");

test("normal item before sell date", function(t) {
    // given
    const item = new Item('+5 Dexterity Vest', 10, 20);
    const shop = new Shop([item]);

    // when
    shop.updateQuality();

    // then
    t.equal(item.sellIn, 9);
    t.equal(item.quality, 19);
    t.end();
});
