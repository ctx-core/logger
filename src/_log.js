import { log } from './log';
export function _log(message, fn) {
    return (...arg_a1) => {
        log(message);
        return fn(...arg_a1);
    };
}
