"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    results;
    constructor() {
        const date = new Date();
        date.setHours(date.getHours() - 3);
        this.results = {
            startDate: date.toISOString(),
            requestCounter: {},
        };
    }
    plus(path) {
        if (this.results.requestCounter[path])
            this.results.requestCounter[path]++;
        else
            this.results.requestCounter[path] = 1;
    }
}
exports.Logger = Logger;
