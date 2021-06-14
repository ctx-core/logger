import { chalk_info } from './chalk';
import { logger_timestamp_ } from './logger_timestamp_';
export function info(...arg_a) {
    return chalk_info(logger_timestamp_(), ...arg_a);
}
//# sourceMappingURL=src/info.js.map