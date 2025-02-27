import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Doc = GetTypeByName<typeof configuration, "docs">;
export declare const allDocs: Array<Doc>;

export type DocsMeta = GetTypeByName<typeof configuration, "docsMeta">;
export declare const allDocsMetas: Array<DocsMeta>;

export {};
