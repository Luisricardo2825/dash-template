/// <reference types="vite/client" />

declare const __IP_SERVER__: string | undefined;

interface PageProps {
  /** executeQuery melhorado, sendo executado de forma assincrona e retornando uma Promisse */
  executeQuery: <T>(query: string, arr: queryParams) => Promise<T>;
  openApp?: (resourceID: string, params?: object) => void;
  openLevel?: (nivel: string, params?: object) => void;
  refreshDetails?: (componentID: string, params?: object) => void;
  openPage?: (page: string, params?: object) => void;
  /** Parametros recebidos pela janela de parametros sankhya */
  Params?: NonNullable<{ [x: string]: unknown }>;
}

declare interface Window {
  __routes: string[];
  /** Execute query padrão, fornecido pela janela de dashboards do sankhya */
  executeQuery?: (
    query: string,
    arr: queryParams,
    onSuccess: (result: string) => void,
    onError: (result: string) => void
  ) => void;
  /** executeQuery melhorado, sendo executado de forma assincrona e retornando uma Promisse */
  executeQueryAsync: <T>(query: string, arr: queryParams) => Promise<T>;
  openApp?: (resourceID: string, params?: object) => void;
  openLevel?: (nivel: string, params?: object) => void;
  refreshDetails?: (componentID: string, params?: object) => void;
  openPage?: (page: string, params?: object) => void;
  /** Parametros recebidos pela janela de parametros sankhya */
  Params?: NonNullable<{ [x: string]: unknown }>;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
interface SankhyaRet {
  serviceName: string;
  status: string;
  pendingPrinting: string;
  transactionId: string;
  responseBody: ResponseBody;
}

interface ResponseBody {
  fieldsMetadata: FieldsMetadaum[];
  rows: rows;
  burstLimit: boolean;
  timeQuery: string;
  timeResultSet: string;
}

type rows = Array<any>;

interface FieldsMetadaum {
  name: string;
  description: string;
  order: number;
  userType: string;
  precision?: number;
}
