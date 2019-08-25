/** 
 * api接口统一管理
 */
import { get, post } from './http'

export const apiAddress = p => get('discover/cxqzxxlb', p);
export const login = p => post('mis/pc/login', p, {
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

/** 订单页面 */
export const getOrderStatus = p => post('mis/pc/getorderstatuslist', p, {
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
export const getOrderList = p => post('mis/pc/getorderlistwithpager', p, {
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
