import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Summary } from "./components/summary";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
import { api } from "./services/api";

/*
? DESAFIO - Shopping Cart:
Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:
todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item
todo - cálculo do preço total dos itens inseridos
todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/

interface carro {
  id: number;
  name: string;
  category: string;
  quantity: number;
  prince: number;
}

export function App() {
  const [carro, setCarro] = useState<carro[]>([]);

  const loadProducst = async () => {
    const response = await api.get("/cart");
    const data = response.data;

    setCarro((state) => [...data, state]);
  };

  useEffect(() => {
    loadProducst();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Title data={"Seu carrinho"} />
        <div className="content">
          <section>
            <button
              // onClick={handleAddItemToCart}
              style={{ padding: "5px 10px", marginTop: 15 }}
            >
              Adicionar
            </button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {carro.map((product, index) => (
                  <Table key={index} product={product} />
                ))}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}
