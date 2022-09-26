import Header from "./components/Header";
import Banner from "./components/Banner";
import imgCTA from "../public/fale-conosco.jpg";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Banner />
      <section className="container py-4 d-flex align-items-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <div>
                <h4 className="text-center">Social Media</h4>
                <p className="text-center">
                  <span className={styles.cardSubtitle}>Redes Sociais</span>
                </p>
                <p className="text-center">
                  <span className={styles.CardText}>
                    Planejamento todo o conteúdo que será publicado em suas
                    Redes Sociais dentro de um cronograma mensal.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <h4 className="text-center">Gestão de Tráfego</h4>
              <p className="text-center">
                <span className={styles.cardSubtitle}>
                  Anúncios na internet
                </span>
              </p>
              <p className="text-center">
                <span className={styles.cardText}>
                  Estudos de palavra-chave e de público para a criação e
                  implementação de campanhas de mídia paga.
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card p-2 h-100">
              <div className={styles.trafegoPago}>
                <h4 className="text-center">Marketing de Conteúdo</h4>
                <p className="text-center">
                  <span className={styles.cardSubtitle}>
                    Criação de Conteúdo
                  </span>
                </p>
                <p className="text-center">
                  <span className={styles.text}>
                    Criação de distribuição de conteúdo relevante, promovendo
                    implicitamente a marca.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid vh-100 d-flex align-items-center justify-content-between">
        <div className="row d-flex align-items-center my-3">
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 pb-5">
                <h1>
                  Converse com um Especialista e tire todas as suas dúvidas!
                </h1>
              </div>
              <div className="col-12">
                <div className="py-3 text-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=5531982109478"
                    className="btn btn-lg p-3 btn-success"
                  >
                    <strong>Fale Conosco</strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FFF"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="row">
              <img src="fale-conosco.jpg" alt="Fale Conosco!" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-danger text-light">
        <div className={styles.disclamerSectionOne}>
          <h3 className="vh-100 text-center d-flex align-items-center">
            Não somos meros criadores de posts ou desenvolvedores de sites.
          </h3>
        </div>
      </section>
      <section className="container-fluid bg-primary">
        <div className={styles.disclamerSectionOne}>
          <h3 className="vh-100 text-center d-flex align-items-center text-light">
            Nosso objetivo é Gerar Valor para o seu Negócio de maneira
            estratégica!
            <br />
            Divugar sua Marca e levar os Clientes até Você.
          </h3>
        </div>
      </section>
    </div>
  );
}
