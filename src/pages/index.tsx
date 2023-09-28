import {
  Link,
  useLoaderData,
  useLocation,
  ActionFunction,
  Form,
  useActionData,
} from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  const location = useLocation();
  const actionData = useActionData();
  return (
    <div>
      {location.pathname}
      <br />
      {JSON.stringify(data)}
      {JSON.stringify(actionData)}
      {window.__routes.map((path) => (
        <div key={path}>
          <Link to={path}>{path}</Link>
          <br />
        </div>
      ))}
      <Form method="post">
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

export const Action: ActionFunction = async () => {
  // const formData = await request.formData();

  return {
    body: "Deu tudo certo",
    ok: true,
  };
};
