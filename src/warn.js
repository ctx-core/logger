import { chalk_warn } from './chalk';
import { _logger_timestamp } from './_logger_timestamp';
export function warn(...arg_a1) {
    return chalk_warn(_logger_timestamp(), ...arg_a1);
}
