export interface ILogger {
  prefix: string;
  log: (message: string) => void;
}
