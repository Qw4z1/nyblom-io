import { Client, isFullPage, isFullPageOrDatabase } from "@notionhq/client";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Book } from "../types/books";
import { mapTitle, mapSelect, mapRichText, mapUrl } from "./notionHelpers";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const databaseId = process.env.NOTION_DB_ID as string;

const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Read",
            },
          },
          {
            property: "Rating",
            select: {
              does_not_equal: "1",
            },
          },
          {
            property: "Rating",
            select: {
              does_not_equal: "2",
            },
          },
          {
            property: "Rating",
            select: {
              does_not_equal: "3",
            },
          },
        ],
      },
    });
    return response.results
      .filter((it): it is PageObjectResponse | DatabaseObjectResponse =>
        isFullPageOrDatabase(it)
      )
      .map((it) => {
        return {
          id: it.id,
          name: mapTitle(it, "Name").title[0].plain_text,
          rating: parseInt(mapSelect(it, "Rating").select?.name ?? "0"),
          author: mapRichText(it, "Author").rich_text[0].plain_text,
          link: mapUrl(it, "Link").url ?? "",
          category: mapSelect(it, "Category").select?.name ?? "",
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (e) {
    console.log(e);
  }
  return [];
};

export default getBooks;
