import Header from "./components/Header";
import Carousel from "./components/Carousel";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.banner}>
        <div className={styles.opacity}>
          <h1 className="text-light text-center">
            <span className="text-warning">Soluções</span> Completas para o
            <span className="text-warning"> Crescimento</span> do seu
            <span className="text-warning"> Negócio</span>
          </h1>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <div className={styles.trafegoPago}>
                <h4 className="text-center">
                  <span>Social Media</span>
                </h4>
                <p className="text-center">
                  <span>Anúncios na internet</span>
                </p>
                <p className={styles.text}>
                  Tráfego pago é uma ferramenta de marketing digital que
                  possibilita alavancar os acessos ao seu site, blog ou Perfil.
                  Por meio de anúncios em redes sociais, plataformas de busca,
                  ele possibilita expor sua marca a mais pessoas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <div className={styles.trafegoPago}>
                <h4 className="text-center">
                  <span>Gestão de Tráfego</span>
                </h4>
                <p className="text-center">
                  <span>Anúncios na internet</span>
                </p>
                <p className={styles.text}>
                  Tráfego pago é uma ferramenta de marketing digital que
                  possibilita alavancar os acessos ao seu site, blog ou Perfil.
                  Por meio de anúncios em redes sociais, plataformas de busca,
                  ele possibilita expor sua marca a mais pessoas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <div className={styles.trafegoPago}>
                <h4 className="text-center">
                  <span>Marketing de Conteúdo</span>
                </h4>
                <p className="text-center">
                  <span>Anúncios na internet</span>
                </p>
                <p className={styles.text}>
                  Tráfego pago é uma ferramenta de marketing digital que
                  possibilita alavancar os acessos ao seu site, blog ou Perfil.
                  Por meio de anúncios em redes sociais, plataformas de busca,
                  ele possibilita expor sua marca a mais pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="py-3 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=5531982109478"
            className="btn btn-lg p-3 btn-success"
          >
            <strong>Fale com um especialista</strong>
          </a>
        </div>
      </section>

      <Carousel />

      <section className="container-fluid">
        <h2 className="text-center py-3">
          Acompanhamos diariamente seus resultados
        </h2>
      </section>
    </div>
  );
}
