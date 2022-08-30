import React, { useState } from "react";
import Header from "./components/Header";

import Carousel from "react-bootstrap/Carousel";

import styles from "../styles/home.module.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Header />
      <section className={styles.homeBanner}>
        <div className={styles.bannerOpacity}>
          <h1 className="text-light text-center">
            Soluções Completas para o Crescimento do seu Negócio
          </h1>
        </div>
      </section>
      <section className="container-fluid">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title text-center">SEO</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Otimização de Sites
            </h6>
            <p className="card-text">
              Otimizamos o conteúdo do seu site para que consiga a posição mais
              alta possível na página dos resultados de busca.
            </p>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title text-center">Google Ads</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Anúncios no Google
            </h6>
            <p className="card-text">
              Apareça quando seus clientes estiverem pesquisando no Google,
              navegando na Web e assistindo vídeos no YouTube.
            </p>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title text-center">Facebook e Instagram</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Anúncios nas Redes Sociais
            </h6>
            <p className="card-text">
              Apareça quando seus clientes estiverem pesquisando no Google,
              navegando na Web e assistindo vídeos no YouTube.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="cta d-grid gap-2 py-3">
          <a href="#" className="btn btn-lg btn-outline-success">
            Fale com um especialista
          </a>
        </div>
      </section>

      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="google_512.png"
            alt="Google"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="facebook_512.png"
            alt="Facebook"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="instagram_512.png"
            alt="Instagram"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="linkedin_512.png"
            alt="LinkedIn"
          />
        </Carousel.Item>
      </Carousel>

      <section className="container-fluid">
        <h2 className="text-center py-3">
          Acompanhamos diariamente seus resultados
        </h2>
      </section>
    </div>
  );
}
