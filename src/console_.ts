export function console_(fn:Function, log_ctx:Record<keyof Console, any>) {
	return (...arg_a:any[])=>{
		let key:keyof Console
		for (key in log_ctx) {
			console[key as keyof Console](log_ctx[key as keyof Console])
		}
		return fn(...arg_a)
	}
}
export {
	console_ as _console,
}
