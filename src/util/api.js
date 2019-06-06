/** 
 * api接口统一管理
 */
import { get, post } from './http'

export const apiAddress = p => get('discover/cxqzxxlb', p);
export const postTest = p => post('supplier/applet/home', p);
