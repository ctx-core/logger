import { chalk_log } from '../ansi/index.js'
import { logger_timestamp_ } from '../logger_timestamp_/index.js'
export function log(...arg_a) {
	return chalk_log(logger_timestamp_(), ...arg_a)
}
