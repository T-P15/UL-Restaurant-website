const db = require('../config/connection');
const { User, Menuitem, Category, Order, Admin, Drinks, Snacks } = require('../models');
const categorySeeds = require('./categorySeeds.json');
const menuitemSeeds = require('./menuitemSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Category', 'categories');
    await cleanDB('Menuitem', 'menuitems');

    await Category.create(categorySeeds);
    await Menuitem.create(menuitemSeeds)

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});