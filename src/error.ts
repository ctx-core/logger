import { chalk_error } from './ansi.js'
import { logger_timestamp_ } from './logger_timestamp_.js'
export function error(...arg_a: any[]) {
	return chalk_error(logger_timestamp_(), ...arg_a)
}
export {
	error as error__log
}
