import { chalk_log } from './ansi.js'
import { logger_timestamp_ } from './logger_timestamp_.js'
export function log(...arg_a: any[]) {
	return chalk_log(logger_timestamp_(), ...arg_a)
}
