import { Client } from "@notionhq/client";
import { Book } from "../types/books";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const databaseId = process.env.NOTION_DB_ID as string;

const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "Read",
        },
      },
    });
    console.log(response.results[0]);
    return response.results
      .map((it) => {
        let it2 = it as any;
        return {
          id: it2.id,
          name: it2.properties.Name.title[0].plain_text,
          rating: parseInt(it2.properties.Rating.select.name),
          author: it2.properties.Author.rich_text[0].plain_text,
          link: it2.properties.Link.url,
        };
      })
      .sort((a, b) => b.rating - a.rating);
  } catch (e) {
    console.log(e);
  }
  return [];
};

export default getBooks;
