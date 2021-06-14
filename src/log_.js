import { log } from './log';
export function log_(message, fn) {
    return (...arg_a) => {
        log(message);
        return fn(...arg_a);
    };
}
export { log_ as _log, };
//# sourceMappingURL=src/log_.js.map