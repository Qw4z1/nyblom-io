import type { GetStaticProps, NextPage } from "next";
import { Head } from "../components/Head";
import getBooks from "../helpers/getBooks";
import { Book } from "../types/books";

interface BooksPageProps {
  books: {
    [key: string]: Book[];
  };
}

const Now: NextPage<BooksPageProps> = ({ books }) => {
  return (
    <>
      <Head
        title={"Books"}
        description={
          "What books has Viktor read and what did he think about them?"
        }
      />
      <div className="py-4 w-full flex flex-col justify-start items-start m-auto">
        <h1>Books</h1>
        <p className="text-base lg:text-lg">
          These are the books I most commonly recommend, neatly organized by
          category. Each on of them is rated 4/5 or higher in my spreadsheet of
          books I&apos;ve read, so you don&apos;t have to wonder if it&apos;s worth reading.
        </p>
        <div>
          {Object.keys(books).map((key: string) => {
            const category = books[key];
            return (
              <div key={key}>
                <h3>{key}</h3>
                <ul className="list-disc list-inside">
                  {category.map((it) => {
                    return (
                      <li className="pt-2" key={it.link}>
                        <a href={it.link}><span className="capitalize">{it.name}</span></a> by {it.author}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BooksPageProps> = async () => {
  const books = await getBooks();

  const categorizedBooks = books.reduce((result: any, current) => {
    return {
      ...result,
      [current.category]: [...(result[current.category] ?? []), current],
    };
  }, []);

  return {
    props: {
      books: categorizedBooks,
    },
  };
};

export default Now;
