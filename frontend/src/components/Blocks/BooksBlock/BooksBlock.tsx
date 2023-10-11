import { BookBlockT } from "@/types/types";
import { Book } from "lucide-react";

const BooksBlock = (props: BookBlockT) => {
  const { id, books } = props;
  return (
    <div>
      id: {id}
      {books.map((book) => (
        <Book key={book.id} />
      ))}
    </div>
  );
};

export default BooksBlock;
