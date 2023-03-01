import "./App.scss";
import { Header } from "./components/Header";
import { Summary } from "./components/summary";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
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
