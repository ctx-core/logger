import { chalk_warn } from './chalk'
import { logger_timestamp_ } from './logger_timestamp_'
export function warn(...arg_a: any[]) {
	return chalk_warn(logger_timestamp_(), ...arg_a)
}
