module.exports = function (app) {

  var MenuItemModel = require('../model/menuItem/menuItem.model.server');

  app.post('/api/restaurant/menu/:menuId/menuItem', addMenuItemForMenu);
  app.get('/api/menu/menuItem/:menuItemId', findMenuItemByItemId);
  app.get('/api/menu/:menuId/menuItem', findMenuItemsByMenuId);
  app.delete('/api/menu/menuItem/:menuItemId',deleteMenuItem);
  app.put('/api/menu/menuItem/:menuItemId', updateMenuItemById);
  app.delete('/api/menu/:menuId', deleteMenuItemsByMenuId);

  function addMenuItemForMenu(req,res) {
    const menuId = req.params['menuId'];
    const menuItem = req.body;
    MenuItemModel.addMenuItemForMenu(menuId,menuItem)
      .then(function (menu) {
        res.json(menu);
      });
  }

  function findMenuItemByItemId(req,res) {
    const menuItemId = req.params['menuItemId'];
    MenuItemModel.findMenuItemByItemId(menuItemId)
      .then(function (menuItem) {
        res.json(menuItem);
      });
  }

  function findMenuItemsByMenuId(req,res) {
    const menuId = req.params['menuId'];
    MenuItemModel.findMenuItemsByMenuId(menuId)
      .then(function (items) {
        res.json(items);
      }, function (err) {
        console.log(err);
      });
  }
  function deleteMenuItem(req,res) {
    const menuItemId = req.params['menuItemId'];
    MenuItemModel.deleteMenuItem(menuItemId)
      .then(function (status) {
        res.json(status);
      });
  }
  function updateMenuItemById(req,res) {
    const menuItemId = req.params['menuItemId'];
    const menuItem = req.body;
    MenuItemModel.updateMenuItemById(menuItemId,menuItem)
      .then(function (status){
        res.json(status);
      });
  }
  function deleteMenuItemsByMenuId(req,res) {
    const menuId = req.params['menuId'];
    MenuItemModel.deleteMenuItemsByMenuId(menuId)
      .then(function (status) {
        res.json(status);
      });
  }
};

