import { log } from './log'
export function log_(message: any, fn: Function) {
	return (...arg_a:any[]) => {
		log(message)
		return fn(...arg_a)
	}
}
export {
	log_ as _log,
}
