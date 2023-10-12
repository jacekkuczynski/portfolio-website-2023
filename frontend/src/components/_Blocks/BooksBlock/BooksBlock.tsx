import { BookBlockT } from "@/types/types";
import Book from "./Book";

const BooksBlock = (props: BookBlockT) => {
  const { books } = props;
  return (
    <div className="container w-full ">
      <div className="flex flex-col items-center w-full h-full gap-2 md:gap-4 lg:gap-8">
        {books.map((book, index) => (
          <Book {...book} key={book.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BooksBlock;
