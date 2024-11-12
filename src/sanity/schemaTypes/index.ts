import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { commercialType } from "./commercialType";
import { projectType } from "./projectType";
import { musicLibraryType } from "./musicLibraryType";
import { filmType } from "./filmType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    commercialType,
    projectType,
    filmType,
    musicLibraryType,
  ],
};
