import { chalk_error } from './chalk'
import { _logger_timestamp } from './_logger_timestamp'
export function error(...arg_a1: any[]) {
	return chalk_error(_logger_timestamp(), ...arg_a1)
}
export {
	error as error__log
}
