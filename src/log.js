import { chalk_log } from './chalk';
import { logger_timestamp_ } from './logger_timestamp_';
export function log(...arg_a) {
    return chalk_log(logger_timestamp_(), ...arg_a);
}
//# sourceMappingURL=src/log.js.map