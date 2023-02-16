const use_ansi = !!(typeof window === 'undefined' && typeof require === 'function')
export function ansi_debug(...arg_a) {
	return (console.debug || console.info).apply(console, debug_ansi_a_(...arg_a))
}
export function ansi_log(...arg_a) {
	return console.log.apply(console, log_ansi_a_(...arg_a))
}
export function ansi_info(...arg_a) {
	return console.info.apply(console, info_ansi_a_(...arg_a))
}
export function ansi_warn(...arg_a) {
	return console.warn.apply(console, warn_ansi_a_(...arg_a))
}
export function ansi_error(...arg_a) {
	return console.error.apply(console, error_ansi_a_(...arg_a))
}
export {
	ansi_debug as chalk_debug,
	ansi_log as chalk_log,
	ansi_info as chalk_info,
	ansi_warn as chalk_warn,
	ansi_error as chalk_error,
}
function debug_ansi_a_(...arg_a) {
	return use_ansi ? [
			`\x1B[37m${arg_a.join(' ')}\x1B[39m`
		] // chalk.white
									: arg_a
}
function log_ansi_a_(...arg_a) {
	return use_ansi ? [
			`\x1B[90m${arg_a.join(' ')}\x1B[39m`
		] // chalk.grey
									: arg_a
}
function info_ansi_a_(...arg_a) {
	return use_ansi ? [
			`\x1B[32m${arg_a.join(' ')}\x1B[39m`
		] // chalk.green
									: arg_a
}
function warn_ansi_a_(...arg_a) {
	return use_ansi ? [
			`\x1B[31m${arg_a.join(' ')}\x1B[39m`
		] // chalk.red
									: arg_a
}
function error_ansi_a_(...arg_a) {
	return use_ansi ? [
			`\x1B[31m\x1B[1m${arg_a.join(' ')}\x1B[22m\x1B[39m`
		] // chalk.red.bold
									: arg_a
}

