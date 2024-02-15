const db = require('../config/connection');
const { Menuitem, Category } = require('../models');
const categorySeeds = require('./categorySeeds.json');
const menuitemSeeds = require('./menuitemSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Category', 'categories');
    await cleanDB('Menuitem', 'menuitems');

    await Category.insertMany(categorySeeds);
    await Menuitem.insertMany(menuitemSeeds)

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});