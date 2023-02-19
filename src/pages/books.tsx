import type { GetStaticProps, NextPage } from "next";
import { Head } from "../components/Head";
import getBooks from "../helpers/getBooks";
import { Book } from "../types/books";

interface BooksPageProps {
  books: Book[];
}
export const getStaticProps: GetStaticProps<BooksPageProps> = async () => {
  const books = await getBooks();
  const sorted = books.sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      books: sorted,
    },
  };
};

const Now: NextPage<BooksPageProps> = ({ books }) => {
  return (
    <>
      <Head title={"Books"} description={"Viktor's top picks"} />
      <div className="py-4 w-full flex flex-col justify-start items-start m-auto">
        <h1>Books</h1>
        <p className="text-base lg:text-lg">
          These are the books I most commonly recommend, neatly organized by
          category. Each on of them is rated 4 (out of 5) or higher in my
          spreadsheet of books I&apos;ve read, so you don&apos;t have to wonder
          if it&apos;s worth reading.
        </p>
        <table className="table-fixed border-separate border-spacing-y-4 border-spacing-x-2">
          <thead className="text-left">
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => {
              return (
                <tr key={book.id} className="border">
                  <td>
                    <a href={book.link} className="capitalize">
                      {book.name}
                    </a>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Now;
