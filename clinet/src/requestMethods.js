import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTY5YWE3ZWJiNWRmYmI3YTgxMmQzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzM3MzM5OSwiZXhwIjoxNjQzNjMyNTk5fQ._Hhwlf-8kGZoXxtbMKY2opVxTt6brHCCCnBiCcoOC8k";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
