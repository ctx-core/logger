export function _console(fn: Function, log_ctx: object) {
	return (...arg_a1) => {
		for (let key in log_ctx) {
			console[key](log_ctx[key])
		}
		return fn(...arg_a1)
	}
}
