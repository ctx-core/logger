import { chalk_info } from './ansi.js'
import { logger_timestamp_ } from './logger_timestamp_.js'
export function info(...arg_a: any[]) {
	return chalk_info(logger_timestamp_(), ...arg_a)
}
