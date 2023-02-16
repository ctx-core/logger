import { chalk_error } from '../ansi/index.js'
import { logger_timestamp_ } from '../logger_timestamp_/index.js'
export function error(...arg_a) {
	return chalk_error(logger_timestamp_(), ...arg_a)
}
export { error as error__log }
