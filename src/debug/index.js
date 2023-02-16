import { chalk_debug } from '../ansi/index.js'
import { logger_timestamp_ } from '../logger_timestamp_/index.js'
export function debug(...arg_a) {
	return chalk_debug(logger_timestamp_(), ...arg_a)
}
