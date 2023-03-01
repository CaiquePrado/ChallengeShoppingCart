import "./App.scss";
import { Header } from "./components/Header";
import { Summary } from "./components/summary";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

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

export function App() {
  return (
    <>
      <Header />
      <main>
        <Title data={"Seu carrinho"} />
        <div className="content">
          <section>
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
                <Table />
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
