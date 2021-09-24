import { useEffect, useState } from "react";
import Card from "../components/Card";
import Display from "../components/Display";
import GenerateNumbers from "../services/GenerateNumbers";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [qtdNumeros, setQtdNumeros] = useState(6);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(60);
  const [validacao, setValidacao] = useState("");
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(GenerateNumbers(min, max, qtdNumeros));
  }, []);

  let displayList = numbers.map((item) => <Display number={item} key={item} />);

  function sortearNumeros() {
    if (qtdNumeros < 6) {
      setValidacao("O mínimo é 6 números");
    } else if (qtdNumeros > 15) {
      setValidacao("O máximo é 15 números");
    } else if (min < 1) {
      setValidacao("O mínimo é 1");
    } else if (max > 60) {
      setValidacao("O máximo é 60");
    } else {
      setNumbers(GenerateNumbers(min, max, qtdNumeros));
      setValidacao("");
    }
  }

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "50%",
        }}
      >
        <p className={styles.title}>Gerador Mega Sena</p>
        <Card numbers={displayList} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            value={qtdNumeros}
            onChange={(e) => setQtdNumeros(e.target.value)}
            type="number"
            className={styles.input}
            placeholder="Qtd de números"
          />
          <button className={styles.button} onClick={sortearNumeros}>
            Sortear números
          </button>
          <p className={styles.validation}>{validacao}</p>
        </div>
      </div>
    </div>
  );
}
