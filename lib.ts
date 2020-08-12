import {
	chalk_debug, chalk_log, chalk_info, chalk_warn, chalk_error
} from './chalk'
export function debug(...arg_a1) {
	return chalk_debug(_timestamp(), ...arg_a1)
}
export function log(...arg_a1) {
	return chalk_log(_timestamp(), ...arg_a1)
}
export function info(...arg_a1) {
	return chalk_info(_timestamp(), ...arg_a1)
}
export function warn(...arg_a1) {
	return chalk_warn(_timestamp(), ...arg_a1)
}
export function error(...arg_a1) {
	return chalk_error(_timestamp(), ...arg_a1)
}
export const error__log = error
function _timestamp() {
	return (new Date()).toISOString()
}
export function _log(message, fn) {
	return function (...arg_a1) {
		log(message)
		return fn(...arg_a1)
	}
}
export function _console(fn, ctx__log) {
	return function (...arg_a1) {
		for (let key in ctx__log) {
			console[key](ctx__log[key])
		}
		return fn(...arg_a1)
	}
}
