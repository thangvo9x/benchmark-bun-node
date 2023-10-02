import { Elysia } from "elysia";

const header = {
  'x-powered-by': 'benchmark',
  'content-type': 'application/json',
  connection: 'keep-alive',
  'keep-alive': 'timeout=5'
}


const app = new Elysia().get("/benchmark/:name", (c) => {
  c.set.headers = header;
  return JSON.stringify({
    name: c.params.name,
    id: c.query.id
  })
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
