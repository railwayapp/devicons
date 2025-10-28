import { handler } from "./build/handler.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));

app.use(handler);

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
