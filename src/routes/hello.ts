import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async context => {
  return {
    body: {
      hello: "Railway",
    },
  };
};
