export declare function console_(
	fn:Function, log_ctx:Record<console_fn_key_T, any>
):(...arg_a:any[])=>any
export { console_ as _console, }
export type console_fn_key_T =
	'debug'
	|'dirxml'
	|'error'
	|'group'
	|'groupCollapsed'
	|'groupEnd'
	|'info'
	|'log'
	|'trace'
	|'warn'
