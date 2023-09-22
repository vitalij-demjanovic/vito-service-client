import { api } from "./api.ts";

const partsService = api.injectEndpoints({
  endpoints: (build) => ({
    getParts: build.query({
      query: (id) => `/spare-parts/${id}`,
    }),
  }),
});

export const { useGetPartsQuery } = partsService;
