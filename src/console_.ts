export function console_(fn:Function, log_ctx:Record<console_fn_key_T, any>) {
	return (...arg_a:any[])=>{
		let key:console_fn_key_T
		for (key in log_ctx) {
			console[key](log_ctx[key])
		}
		return fn(...arg_a)
	}
}
export {
	console_ as _console,
}
export type console_fn_key_T = 'debug'|'dirxml'|'error'|'group'|'groupCollapsed'|'groupEnd'|'info'|'log'|'trace'|'warn'
