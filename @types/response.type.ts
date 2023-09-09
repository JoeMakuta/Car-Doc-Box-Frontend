export interface IServerResponse<IPoliceAgent> {
  status: number;
  message: string;
  data: IPoliceAgent;
  error: unknown;
}
