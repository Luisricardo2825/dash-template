import {
  Link,
  useLoaderData,
  useLocation,
  ActionFunction,
  Form,
  useActionData,
} from "react-router-dom";

export default function Home(props: PageProps) {
  const data = useLoaderData();
  const location = useLocation();
  const actionData = useActionData();

  // Exemplo de uso executeQuery
  const consulta = async () => {
    const resultado = await props?.executeQuery<{ CODUSU: number }[]>(
      "Select STP_GET_CODUSULOGADO() as CODUSU from DUAL",
      []
    );

    if (resultado.length > 0) {
      console.log(resultado[0].CODUSU);
    } else {
      console.log("Sem resultados");
    }
  };
  return (
    <div>
      {location.pathname}
      <br />
      {JSON.stringify(data)}
      {JSON.stringify(actionData)}
      <button onClick={consulta}>Consultar usuario logado</button>
      {window.__routes.map((path) => (
        <div key={path}>
          <Link to={path}>{path}</Link>
          <br />
        </div>
      ))}
      <Form method="post">
        <input name="name"></input>
        <button type="submit" name="intent" value="edit">
          Testar action
        </button>
      </Form>
    </div>
  );
}

// Se utilizar o nome em minusculo, desabilita o hmr.
export async function Loader() {
  return (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
}

export const Action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Nome:", data);
  return {
    body: "Deu tudo certo",
    ok: true,
  };
};
