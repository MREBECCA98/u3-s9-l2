import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Books from "./books/fantasy.json";

const AllTheBooks = function (props) {
  return (
    <main>
      <div className="container">
        <h3 className="text-center my-3 fw-bold">FANTASY</h3>
        <div className="row">
          {Books.map((book) => (
            <div className="col-6 col-md-3" key={book.asin}>
              <Card>
                <Card.Img src={book.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {book.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default AllTheBooks;
