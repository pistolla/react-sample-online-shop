import * as CONSTANTS from "./Constants";

export const addItemInCart = item => ({
  type: CONSTANTS.ADD_ITEM_IN_CART,
  payload: item
});
export const showCartDlg = status => ({
  type: CONSTANTS.SHOW_CART_DLG,
  payload: status
});
export const showPaymentDialog = status => ({
  type: CONSTANTS.SHOW_PAYMENT_DLG,
  payload: status
})
export const deleteCartItem = id => ({
  type: CONSTANTS.DELETE_CART_ITEM,
  payload: id
});
export const toggleMenu = () => ({
  type: CONSTANTS.TOGGLE_MENU,
  payload: null
});
export const updateCartItemQnt = obj => ({
  type: CONSTANTS.UPDATE_CART_ITEM_QUANTITY,
  payload: obj
});
export const setCheckedOutItems = items => ({
  type: CONSTANTS.SET_CHECKEDOUT_ITEMS,
  payload: items
});
export const setLoggedInUser = user => ({
  type: CONSTANTS.SET_LOGGED_IN_USER,
  payload: user
});
export const logout = () => ({
  type: CONSTANTS.LOGOUT
});
export const deleteCatalogtem = id => ({
  type: CONSTANTS.DELETE_CATALOG_ITEM,
  payload: id
});
export const editCatalogItem = item => ({
  type: CONSTANTS.EDIT_CATALOG_ITEM,
  payload: item
});
