import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/getAllPrompts";

const app = fastify()

app.register(getAllPromptsRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP serve running on port 3333')
})