import React from "react";
import style from './Home.module.css';
import imagemHome from '../../assets/homeDesc.svg'
import faixaInferior from '../../assets/faixaInferior.svg'

const Home = () => {
    return(
        <>
            <section>
                <img src={imagemHome} alt="" />
                <h2 className={style.trajetoria}>Nossa tragetória</h2>
                <p className={style.textSobre}>
                    Desde sua inauguração em 2010, o restaurante mexicano Viva la Vida tem sido um oásis de sabores vibrantes e atmosfera acolhedora no coração da cidade. Fundado por Javier Martinez, um apaixonado pela culinária mexicana, o Viva la Vida rapidamente conquistou o paladar dos moradores locais e visitantes com pratos autênticos como tacos al pastor, guacamole fresco e margaritas artesanais.
                </p>
                <br />
                <p className={style.textSobre}>
                    Com o tempo, o restaurante cresceu não apenas em tamanho, mas também em reputação, tornando-se um ponto de encontro popular para amigos e famílias que buscam uma experiência gastronômica única. A decoração colorida e a música mexicana ao vivo nas noites de sexta-feira criam uma atmosfera festiva que reflete a alegria e a paixão pela vida que são essenciais na cultura mexicana.
                </p>
                <br />
                <p className={style.textSobre}>
                    Hoje, o Viva la Vida continua a ser um ícone da culinária mexicana na cidade, mantendo a tradição de excelência culinária e hospitalidade calorosa que o tornaram um lugar especial para todos que desejam celebrar a vida com comida deliciosa e momentos inesquecíveis.
                </p>
                <img src={faixaInferior} alt="" />
            </section>
        </>
    )
}

export default Home;