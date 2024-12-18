import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Falling Whale")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("film").title("Films"),
      S.documentTypeListItem("commercial").title("Commercials"),
      S.documentTypeListItem("musicLibrary").title("Music Library"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["project", "film", "commercial", "musicLibrary"].includes(
            item.getId()!
          )
      ),
    ]);
