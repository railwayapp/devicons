import type { ActionState, AppState } from "./types";
import dayjs from "dayjs/esm";
import { actionState } from "./actions";

const startDate = new Date();

const isRelevantEnvVar = (name: string): boolean =>
  name.startsWith("RAILWAY_") ||
  name.startsWith("DATABASE_URL") ||
  name.startsWith("PG") ||
  name.startsWith("MYSQL") ||
  name.startsWith("REDIS");

const getRelevantEnvVars = (): Record<string, string> =>
  Object.entries(process.env)
    .filter(([key]) => isRelevantEnvVar(key || ""))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    );

export const getAppState = (): AppState => {
  const envs = getRelevantEnvVars();

  return {
    startDate: dayjs(startDate).format("MMMM D, YYYY h:mm:ss a"),
    actionState,
    envs,
  };
};
