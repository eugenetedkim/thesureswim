import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01", // use a stable API version date
  useCdn: true, // set to “true” to use Sanity’s CDN for faster public reads
});
