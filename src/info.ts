import { chalk_info } from './chalk'
import { _logger_timestamp } from './_logger_timestamp'
export function info(...arg_a1: any[]) {
	return chalk_info(_logger_timestamp(), ...arg_a1)
}
