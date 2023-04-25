import dotenv from "dotenv";

dotenv.config();

function getConfig() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PROD_PORT:
      process.env.PROD_PORT != null ? Number(process.env.PROD_PORT) : undefined,
  };
}

function parseConfig(config) {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config;
}

const configRaw = getConfig();

const config = parseConfig(configRaw);

export default config;
