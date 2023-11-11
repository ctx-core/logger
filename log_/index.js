import { log } from '../log/index.js'
/**
 * @param message
 * @param {Function}fn
 * @returns {(...arg_a:any[])=>any}
 */
export function log_(message, fn) {
	return (...arg_a)=>{
		log(message)
		return fn(...arg_a)
	}
}
export { log_ as _log, }
