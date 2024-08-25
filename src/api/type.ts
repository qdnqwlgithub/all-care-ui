export interface PageResponse<T> extends R {
  data: {
    records: T;
    total: number;
    size: number;
    current: number;
    searchCount: number;
    pages: number;
  };
}

export interface QueryPageWrapper {
  page: number;
  limit: number;
}

export interface R {
  code: number;
  message: string;
  ok: boolean;
}
