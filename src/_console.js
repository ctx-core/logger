export function _console(fn, log_ctx) {
    return (...arg_a1) => {
        let key;
        for (key in log_ctx) {
            console[key](log_ctx[key]);
        }
        return fn(...arg_a1);
    };
}
