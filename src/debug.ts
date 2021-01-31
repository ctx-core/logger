import { chalk_debug } from './chalk'
import { _logger_timestamp } from './_logger_timestamp'
export function debug(...arg_a1: any[]) {
	return chalk_debug(_logger_timestamp(), ...arg_a1)
}
