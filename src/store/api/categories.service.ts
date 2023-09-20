import { api } from "./api.ts";

const categoriesService = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesService;
