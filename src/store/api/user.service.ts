import { api } from "./api.ts";

const userData = api.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query({
      query: () => "auth/profile",
    }),
  }),
});

export const { useGetUserDataQuery } = userData;
