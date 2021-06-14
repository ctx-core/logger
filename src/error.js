import { chalk_error } from './chalk';
import { logger_timestamp_ } from './logger_timestamp_';
export function error(...arg_a) {
    return chalk_error(logger_timestamp_(), ...arg_a);
}
export { error as error__log };
//# sourceMappingURL=src/error.js.map