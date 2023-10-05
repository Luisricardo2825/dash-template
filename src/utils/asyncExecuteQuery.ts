import ArrayToObject from "./ArrayToObject";
import inIframe from "./CheckIframe";
import isJson from "./isJson";

async function executeQueryAsync<T>(query: string, arr: string[]): Promise<T> {
  const isIframe = inIframe();
  if (import.meta.env.DEV && !isIframe) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        query: query,
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const callApi = await fetch(
        `http://${__IP_SERVER__}:3000/query`,
        requestOptions
      );

      return callApi.json();
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  if (window?.executeQuery === undefined) {
    const response = await fetch(
      `/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&outputType=json`,
      {
        method: "POST",
        body: JSON.stringify({
          serviceName: "DbExplorerSP.executeQuery",
          requestBody: {
            sql: query,
          },
        }),
      }
    );
    const data: SankhyaRet = await response.json();
    return ArrayToObject<T>(data);
  }
  return new Promise<T>((resolve, reject) => {
    window?.executeQuery?.(
      query,
      arr,
      (value) => {
        if (!isJson(value)) return reject(value);
        const array = JSON.parse(value);

        // Evita enviar JSON sem dados.
        // Ex: [{"prop":""}]
        for (const element of array) {
          const values = Object.values(element);
          const hasData = values.join("").length > 0;
          if (hasData) return resolve(JSON.parse(value));
          return resolve([] as T);
        }
      },
      (err) => {
        if (isJson(err)) {
          return reject(JSON.parse(err));
        } else {
          return reject(err);
        }
      }
    );
  });
}

export default executeQueryAsync;
