export class Logger {
  results: any;

  constructor() {
    const date = new Date();
    date.setHours(date.getHours() - 3);
    this.results = {
      startDate: date.toISOString(),
      requestCounter: {},
    };
  }

  plus(path: string) {
    if (this.results.requestCounter[path]) this.results.requestCounter[path]++;
    else this.results.requestCounter[path] = 1;
  }
}
