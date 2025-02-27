// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createDocSchema,
  createMetaSchema,
  transformMDX
} from "@fumadocs/content-collections/configuration";
var docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX
});
var docsMeta = defineCollection({
  name: "docsMeta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema
});
var content_collections_default = defineConfig({
  collections: [docs, docsMeta]
});
export {
  content_collections_default as default
};
