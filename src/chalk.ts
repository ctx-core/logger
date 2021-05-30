import type { Chalk } from 'chalk'
let chalk:Chalk
const use_chalk = !!(
	typeof window === 'undefined' && typeof require === 'function'
)
export function init_chalk() {
	chalk = _chalk()
}
export function chalk_debug(...arg_a:any[]) {
	return (console.debug || console.info).apply(console, _debug_chalk_a1(...arg_a))
}
export function chalk_log(...arg_a:any[]) {
	return console.log.apply(console, _log_chalk_a1(...arg_a))
}
export function chalk_info(...arg_a:any[]) {
	return console.info.apply(console, _info_chalk_a1(...arg_a))
}
export function chalk_warn(...arg_a:any[]) {
	return console.warn.apply(console, _warn_chalk_a1(...arg_a))
}
export function chalk_error(...arg_a:any[]) {
	return console.error.apply(console, _error_chalk_a1(...arg_a))
}
function _debug_chalk_a1(...arg_a:any[]) {
	return (
		use_chalk
		? [chalk.white(...arg_a)]
		: arg_a
	)
}
function _log_chalk_a1(...arg_a:any[]) {
	return (
		use_chalk
		? [chalk.grey(...arg_a)]
		: arg_a
	)
}
function _info_chalk_a1(...arg_a:any[]) {
	return (
		use_chalk
		? [chalk.green(...arg_a)]
		: arg_a
	)
}
function _warn_chalk_a1(...arg_a:any[]) {
	return (
		use_chalk
		? [chalk.red(...arg_a)]
		: arg_a
	)
}
function _error_chalk_a1(...arg_a:any[]) {
	return (
		use_chalk
		? [chalk.red.bold(...arg_a)]
		: arg_a
	)
}
function _chalk() {
	if (use_chalk) {
		return require('chalk')
	} else {
		return function chalk(...arg_a:any[]) {
			return arg_a
		}
	}
}
