import { carro } from "../../App";

interface TableProps {
  product: {
    id: number;
    name: string;
    category: string;
    quantity: number;
    price: number;
  };
  handleDeleteItemToCart: (id: number) => Promise<void>;
  handleUpdateQuantityToCart: (product: carro, action: string) => Promise<void>;
}

export const Table = ({
  product,
  handleDeleteItemToCart,
  handleUpdateQuantityToCart,
}: TableProps) => {
  return (
    <tr>
      <td>
        <div className="product">
          <img src="https://picsum.photos/100/120" alt="" />
          <div className="info">
            <div className="name">{product.name}</div>
            <div className="category">{product.category}</div>
          </div>
        </div>
      </td>
      <td>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </td>
      <td>
        <div className="qty">
          <button onClick={() => handleUpdateQuantityToCart(product, "sub")}>
            <i className="bx bx-minus"></i>
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => handleUpdateQuantityToCart(product, "sum")}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </td>
      <td>
        <button
          onClick={() => handleDeleteItemToCart(product.id)}
          className="remove"
        >
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  );
};
