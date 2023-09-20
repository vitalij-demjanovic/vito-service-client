import { api } from "./api.ts";

const CreateItemService = api.injectEndpoints({
  endpoints: (build) => ({
    createItem: build.mutation({
      query: (item) => ({
        url: "/spare-parts/create",
        method: "POST",
        body: item,
      }),
    }),
  }),
});

export const { useCreateItemMutation } = CreateItemService;
