import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.opacity}>
        <h1 className="text-light text-center">
          <span className="text-warning">Soluções</span> Completas para o
          <span className="text-warning"> Crescimento</span> do seu
          <span className="text-warning"> Negócio</span>
        </h1>
      </div>
    </section>
  );
}
