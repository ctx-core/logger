import { chalk_warn } from '../ansi/index.js'
import { logger_timestamp_ } from '../logger_timestamp_/index.js'
export function warn(...arg_a) {
	return chalk_warn(logger_timestamp_(), ...arg_a)
}
