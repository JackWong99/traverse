export interface ActionResponse<T = any> {
  type: string;
  payload: T;
}

export interface RemoteSource {
  loaded: boolean;
  loading: boolean;
  error?: string;
}

export interface TrackUpdateSource<T = any> {
  lastUpdated: number;
  data: T;
}
