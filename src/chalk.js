let chalk;
const use_chalk = !!(typeof window === 'undefined' && typeof require === 'function');
export function init_chalk() {
    chalk = _chalk();
}
export function chalk_debug(...arg_a) {
    return (console.debug || console.info).apply(console, debug_chalk_a_(...arg_a));
}
export function chalk_log(...arg_a) {
    return console.log.apply(console, log_chalk_a_(...arg_a));
}
export function chalk_info(...arg_a) {
    return console.info.apply(console, info_chalk_a_(...arg_a));
}
export function chalk_warn(...arg_a) {
    return console.warn.apply(console, warn_chalk_a_(...arg_a));
}
export function chalk_error(...arg_a) {
    return console.error.apply(console, error_chalk_a_(...arg_a));
}
function debug_chalk_a_(...arg_a) {
    return (use_chalk
        ? [chalk.white(...arg_a)]
        : arg_a);
}
function log_chalk_a_(...arg_a) {
    return (use_chalk
        ? [chalk.grey(...arg_a)]
        : arg_a);
}
function info_chalk_a_(...arg_a) {
    return (use_chalk
        ? [chalk.green(...arg_a)]
        : arg_a);
}
function warn_chalk_a_(...arg_a) {
    return (use_chalk
        ? [chalk.red(...arg_a)]
        : arg_a);
}
function error_chalk_a_(...arg_a) {
    return (use_chalk
        ? [chalk.red.bold(...arg_a)]
        : arg_a);
}
function _chalk() {
    if (use_chalk) {
        return require('chalk');
    }
    else {
        return function chalk(...arg_a) {
            return arg_a;
        };
    }
}
//# sourceMappingURL=src/chalk.js.map