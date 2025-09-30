import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Books from "./books/fantasy.json";

const AllTheBooks = function (props) {
  return (
    <main>
      <div className="container">
        <h3>FANTASY</h3>
        <div className="row">
          {Books.map((book) => (
            <div className="col-4" key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img src={book.img} className="w-100" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="secondary">
                    <i class="bi bi-bag-check me-3"></i>
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
