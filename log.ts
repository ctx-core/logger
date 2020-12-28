import { chalk_log } from './chalk'
import { _logger_timestamp } from './_logger_timestamp'
export function log(...arg_a1: any[]) {
	return chalk_log(_logger_timestamp(), ...arg_a1)
}
