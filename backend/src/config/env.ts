import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number),
});

export const ENV = envSchema.parse(process.env);
