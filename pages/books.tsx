import type { GetStaticProps, NextPage } from "next";
import { Head } from "../components/Head";
import getBooks from "../helpers/getBooks";
import { Book } from "../types/books";

interface BooksPageProps {
  books: Book[];
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
        <p className="text-base lg:text-lg">Read : {books.length} books</p>
        <table className="table-auto w-full ">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Author</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {books.map((it) => {
              return (
                <tr>
                  <td>{it.name}</td>
                  <td>{it.author}</td>
                  <td>{it.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BooksPageProps> = async () => {
  const books = await getBooks();
  return {
    props: {
      books: books,
    },
  };
};

export default Now;
