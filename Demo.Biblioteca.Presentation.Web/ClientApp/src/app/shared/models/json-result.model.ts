export interface IJsonResult<TData> {
  isSuccess: boolean;
  message: string;
  detail?: string;
  data?: TData;
  isWarning: boolean;
}