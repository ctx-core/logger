export function console_(fn, log_ctx) {
    return (...arg_a) => {
        let key;
        for (key in log_ctx) {
            console[key](log_ctx[key]);
        }
        return fn(...arg_a);
    };
}
export { console_ as _console, };
//# sourceMappingURL=src/console_.js.map