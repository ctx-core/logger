import type { Chalk } from 'chalk'
let chalk:Chalk
const use_chalk = !!(
	typeof window === 'undefined' && typeof require === 'function'
)
export function init_chalk() {
	chalk = _chalk()
}
export function chalk_debug(...arg_a1:any[]) {
	return (console.debug || console.info).apply(console, _debug_chalk_a1(...arg_a1))
}
export function chalk_log(...arg_a1:any[]) {
	return console.log.apply(console, _log_chalk_a1(...arg_a1))
}
export function chalk_info(...arg_a1:any[]) {
	return console.info.apply(console, _info_chalk_a1(...arg_a1))
}
export function chalk_warn(...arg_a1:any[]) {
	return console.warn.apply(console, _warn_chalk_a1(...arg_a1))
}
export function chalk_error(...arg_a1:any[]) {
	return console.error.apply(console, _error_chalk_a1(...arg_a1))
}
function _debug_chalk_a1(...arg_a1:any[]) {
	return (
		use_chalk
		? [chalk.white(...arg_a1)]
		: arg_a1
	)
}
function _log_chalk_a1(...arg_a1:any[]) {
	return (
		use_chalk
		? [chalk.grey(...arg_a1)]
		: arg_a1
	)
}
function _info_chalk_a1(...arg_a1:any[]) {
	return (
		use_chalk
		? [chalk.green(...arg_a1)]
		: arg_a1
	)
}
function _warn_chalk_a1(...arg_a1:any[]) {
	return (
		use_chalk
		? [chalk.red(...arg_a1)]
		: arg_a1
	)
}
function _error_chalk_a1(...arg_a1:any[]) {
	return (
		use_chalk
		? [chalk.red.bold(...arg_a1)]
		: arg_a1
	)
}
function _chalk() {
	if (use_chalk) {
		return require('chalk')
	} else {
		return function chalk(...arg_a1:any[]) {
			return arg_a1
		}
	}
}
