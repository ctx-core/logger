import { chalk_debug } from './chalk';
import { logger_timestamp_ } from './logger_timestamp_';
export function debug(...arg_a) {
    return chalk_debug(logger_timestamp_(), ...arg_a);
}
//# sourceMappingURL=src/debug.js.map