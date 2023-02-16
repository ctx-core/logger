import { chalk_info } from '../ansi/index.js'
import { logger_timestamp_ } from '../logger_timestamp_/index.js'
export function info(...arg_a) {
	return chalk_info(logger_timestamp_(), ...arg_a)
}
