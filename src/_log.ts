import { log } from './log'
export function _log(message: any, fn: Function) {
	return (...arg_a1:any[]) => {
		log(message)
		return fn(...arg_a1)
	}
}
