import { chalk_warn } from './ansi.js'
import { logger_timestamp_ } from './logger_timestamp_.js'
export function warn(...arg_a: any[]) {
	return chalk_warn(logger_timestamp_(), ...arg_a)
}
