import { chalk_debug } from './chalk.js'
import { logger_timestamp_ } from './logger_timestamp_.js'
export function debug(...arg_a: any[]) {
	return chalk_debug(logger_timestamp_(), ...arg_a)
}
