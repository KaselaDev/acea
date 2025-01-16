import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '@/utils/Icon'
import PreguntasFrecuentesCard from './cards/PreguntasFrecuentesCard';
import Header from '../componenteGenerales/Header';

import porqueTeflonar1 from '@/imgs/porque-teflonar1.png'
import porqueTeflonar2 from '@/imgs/porque-teflonar2.png'
import porqueTeflonar3 from '@/imgs/porque-teflonar3.png'
import videoTesting from '@/imgs/videoTesting.mp4'
import Hero from '@/imgs/hero.png'
import InstagramIcon from '@/imgs/instagramIcon.png'
import WhatsappIcon from '@/imgs/whatsappIcon.png'
import FacebookIcon from '@/imgs/facebookIcon.png'

import './styles/landing.css'

export default function Landing() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Agregar el listener de resize
      window.addEventListener('resize', handleResize);
  
      // Limpieza del listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <Header />
    
    <section className="inicio">
        <div className="afterBefore">
            <h2>¿Y que eligís vos?</h2>
            <div className="comparacion">
                <div className="box">
                    <p>Pieza nueva</p>
                    <br />
                    <strong>$450.000</strong>
                </div>
                <Icon icon={(windowWidth > 660) ? "faAnglesRight" : "faAnglesDown"}/>
                <div className="box">
                    <p>Restauración</p>
                    
                    <strong>Menos de <br /> $100.000</strong>
                </div>
            </div>
            <p className="text">Ahorra más del soble con nuestro servicio de restauración.</p>
        </div>
        <div className="beneficios">
            <h3>Beneficios del servicio</h3>
            <div className="tag">
                <Icon icon="faCheck"/>
                <content>
                    <h4>Garantía de 6 meses</h4>
                    <p>Tus ollas quedarán como nuevas</p>
                </content>
            </div>
            <div className="tag">
                <Icon icon="faCheck"/>
                <content>
                    <h4>Retiro y entrega</h4>
                    <p>Nos encargamos del transporte.</p>
                </content>
            </div>
            <div className="tag">
                <Icon icon="faCheck"/>
                <content>
                    <h4>Asesoramiento personalizado</h4>
                    <p>Nuestros expertos te guiarán.</p>
                </content>
            </div>
        </div>
    </section>
    <section id='info' className="porque_restaurar">
        <h2>¿Porque tienes que restaurar?</h2>
        <content>
            <div className="card">
                <img src={porqueTeflonar1} alt="Cargando..." />
                <h3 className="titulo">¿La comida se te pega?</h3>
                <p className="text">Entendemos lo frustrante que puede ser cuando estás cocinando y la  comida se pega a la sartén. Es una situación que muchos hemos  experimentado: estás en medio de preparar una deliciosa comida y, de  repente, los ingredientes se adhieren a la superficie de la olla o  sartén, complicando el proceso de cocción y aumentando el trabajo de  limpieza. Además, esto puede arruinar tus platos y hacer que la  experiencia culinaria sea menos placentera.</p>
            </div>
            <div className="card">
                <img src={porqueTeflonar2} alt="Cargando..." />
                <h3 className="titulo">¿Teflon gastado?</h3>
                <p className="text">Si tu vajilla con recubrimiento de teflón está desgastada, puede que estés enfrentando problemas como alimentos que se pegan, una limpieza difícil y, potencialmente, la liberación de partículas no deseadas en tu comida. Al optar por renovar el teflonado, recuperarás las propiedades antiadherentes que hacen que cocinar y limpiar sea más fácil y eficiente.</p>
            </div>
            <div className="card">
                <img src={porqueTeflonar3} alt="Cargando..." />
                <h3 className="titulo">Se desgastó el teflón debido a décadas de uso:</h3>
                <p className="text">Si utilizas ollas de marcas reconocidas como Essen, Eterna, Fournee, Cucina Donna, Alma Gourmet, entre otras, el reteflonado es la solución ideal para restaurar tus utensilios y dejarlos como nuevos, manteniendo su calidad y prolongando su vida útil.</p>
            </div>
        </content>
    </section>
    {/* <section className="arregla">
        <h2>No lo tires, todo se arregla</h2>
        <content>
            <video src={videoTesting} autoplay loop aria-label="Antes"></video>
            <div className="arrows">
                <h4>Antes</h4>
                <svg aria-hidden="true">
                    
                </svg>
                <h4>Después</h4>
            </div>
            <video src={videoTesting} autoplay loop aria-label="Después"></video>
        </content>
     </section> */}
    <section className="porque_elegirnos">
        <h2>¿Porque elegir <strong className="GOLD">ACEA</strong>?</h2>
        <content>
            <img src={Hero} alt="" />
            <div className="tags">
                <div className="tag">
                    <h4>Materiales importados de alta calidad</h4>
                    <p>Utilizamos materiales de alta calidad tanto para el reteflonado interior como para la pintura exterior. De esta manera tu olla no sólo lucirá como nueva, sino que también mantendrá el efecto antiadherente a lo largo del tiempo.</p>
                </div>
                <div className="tag">
                    <h4>Materiales importados de alta calidad</h4>
                    <p>Utilizamos materiales de alta calidad tanto para el reteflonado interior como para la pintura exterior. De esta manera tu olla no sólo lucirá como nueva, sino que también mantendrá el efecto antiadherente a lo largo del tiempo.</p>
                </div>
                <div className="tag">
                    <h4>Materiales importados de alta calidad</h4>
                    <p>Utilizamos materiales de alta calidad tanto para el reteflonado interior como para la pintura exterior. De esta manera tu olla no sólo lucirá como nueva, sino que también mantendrá el efecto antiadherente a lo largo del tiempo.</p>
                </div>
            </div>
        </content>
    </section>
    <section id='precios' className="brillar">
        <h2>Haz que tu cocina vuelva a brillar. ✨</h2>
        <content>
            <div className="pasos">
                <div className="card">
                    <h4>Nos enviás foto y medidas de las piezas a restaurar</h4>
                    <p>De esta manera podremos proporcionarte un presupuesto adecuado a tus necesidades.</p>
                </div>
                <Icon icon="faAnglesDown"/>
                <div className="card">
                    <h4>Nuestro repartidor recoge tus piezas y se paga el 50% como señal.</h4>
                    <p>Una vez que las piezas hayan ingresado a la fábrica, recibirás las piezas restauradas en un plazo de 2 a 3 semanas.</p>
                </div>
                <Icon icon="faAnglesDown"/>
                <div className="card">
                    <h4>Enviamos las piezas restauradas directamente a tu domicilio.</h4>
                    <p>Realizamos el reteflonado con maestría y precisión industrial. En 15-20 días, devolvemos la olla restaurada a tu puerta. Abonas el 50% restante al recibirla.</p>
                </div>
            </div>
            <div className="info">
                <h4 className="subtitulo">Ahorra más del doble en comparación con comprar nuevas...</h4>
                <div className="precio">
                    <h3>Precio</h3>
                    <h4 className="GOLD">Desde $70.000 por pieza</h4>
                    <strong>
                        incluye:
                        <ul>
                            <li>Retiro y envío a domicilio sin cargo ✅</li>
                            <li>Asesoramiento personalizado via WhatsApp antes y después de la restauración ✅</li>
                            <li>Garantía de 6 meses ✅</li>
                            <li>Ahorrás más del doble que comprando nuevas ✅</li>
                            <li>Tus ollas quedan nuevas ✅</li>
                        </ul>
                    </strong>
                </div>
                <div className="cards">
                <PreguntasFrecuentesCard 
            question="También tenemos promos a partir de 3 piezas" 
            content={
                <p>
                <ul>
                    <li>10% de descuento del total a partir de la 3er pieza</li>
                    <li>20% de descuento del total a partir de la 6er pieza</li>
                </ul>
                </p>
            }
            />
                </div>
            </div>
        </content>
    </section>
    {/* <section className="testimonios">
        <h2 className="GOLD">Esto dicen nuestros clientes</h2>
        <h3>Sus opiniones en Google e Instagram</h3>
        <div className="galeria">
            <h3>{`{testigos}`}</h3>
        </div>
    </section> */}
    <section className="sobre_nosotros">
        <h2>¿Quiénes somos?</h2>
        <div className="cards">
            <div className="card">
                <h3>Calidad Inigualable:</h3>
                <p>Nos asociamos con los mejores en la industria, utilizando productos importados para garantizar la máxima calidad en cada restauración.</p>
            </div>
            <div className="card">
                <h3>Proceso de Restauración:</h3>
                <p>Ofrecemos un proceso simple y efectivo: retiramos la pieza con nuestro servicio de reparto, realizamos el reteflonado con precisión industrial y devolvemos la olla restaurada directamente a su hogar en 20-30 días hábiles</p>
            </div>
            <div className="card">
                <h3>Calidad Inigualable:</h3>
                <p>Nos asociamos con los mejores en la industria, utilizando productos importados para garantizar la máxima calidad en cada restauración.</p>
            </div>
            <div className="card">
                <h3>Compromiso con el Cliente:</h3>
                <p>Nos esforzamos por ofrecer una experiencia de cliente excepcional, desde el primer contacto hasta la entrega, superando las expectativas en cada paso del camino.</p>
            </div>
            <div className="card">
                <h3>Misión:</h3>
                <p>En Acea, nuestra misión es revitalizar utensilios de cocina, proporcionando funcionalidad renovada y una estética impecable para crear recuerdos duraderos en cada comida.</p>
            </div>
        </div>
        <a href='#contacto' className="btn">
            <h5>Quiero restaurar mis piezas</h5>
        </a>
    </section>
    <section id='preguntasfrecuentes' className="preguntas_frecuentes">
        <h2>Preguntas frecuentes</h2>
        <div className="cards">
        <PreguntasFrecuentesCard 
            question="¿De dónde son?" 
            content={
                <p>
                Somos de Hurlingham, Zona Oeste. Trabajamos de manera online y ofrecemos nuestro servicio de Retiro y Envío sin cargo en todo CABA y Gran Buenos Aires.
                <br />
                <strong>Nuestras sucursales son:</strong>
                <ul>
                    <li>José C Paz</li>
                    <li>Florencio Varela</li>
                </ul>
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿Precio?" 
            content={
                <p>
                Los precios para restaurar una pieza de cocina empiezan desde los $70,000 aprox
                <br />
                <strong>El precio exacto depende de:</strong>
                <ul>
                    <li>El tipo de pieza (Ej: olla, sartén, wok, bifera, pava, etc.)</li>
                    <li>El tamaño de la pieza (Ej: 20, 24, 28, 30cm)</li>
                    <li>Si es necesario poner Mango o Perilla nuevos</li>
                    <li>El estado de la pieza en general</li>
                </ul>
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿El teflón es tóxico o cancerigeno?" 
            content={
                <p>
                Nuestro teflón es seguro para vos y tu familia. El ingrediente principal, el politetrafluoroetileno (PTFE), no reacciona con alimentos ni productos químicos. Además, desde julio de 2020, el componente tóxico (ácido perfluorooctanoico o PFOA) está prohibido en el teflón. Por otra parte, el teflón Dupont que usamos, está libre de PFOA. Por eso, las ollas son libres de ser tóxicas o causar cáncer. 🙌
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿Tiene garantía?" 
            content={
                <p>
                Sí, la restauración tiene una garantía de 6 meses. Y sólo es válida si la falla es por parte nuestra.
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿En cuánto tiempo se hace la restauración?" 
            content={
                <p>
                Desde que retiramos tu olla hasta que la recibís nuevamente restaurada, el proceso puede tomar de 15 a 20 días hábiles.
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿Medios de pago?" 
            content={
                <p>
                <ul>
                    <li>Tarjeta de débito</li>
                    <li>Tarjeta de crédito (1, 3 o 6 cuotas)</li>
                    <li>Transferencia (5% de descuento)</li>
                    <li>Efectivo (10% de descuento)</li>
                    <li>USD (10% de descuento)</li>
                </ul>
                </p>
            }
            />
            <PreguntasFrecuentesCard 
            question="¿Qué marcas restauran?" 
            content={
                <p>
                Restauramos todas las primeras marcas que sean de aluminio grueso.
                Ejemplos: Essen, Fournee, Eterna, Alma Gourmet, Cucina Donna, etc.
                </p>
            }
            />
        </div>
    </section>
    <section id='contacto' className="restaurar">
        <div className="card">
            <h2>¡Restaurá tu cocina!</h2>
            <p>
                Recordá enviarnos los siguientes datos para poder darte el presupuesto ideal para vos:
                <ul>
                    <li>Diametro de las piezas a restaurar</li>
                    <li>Foto de las piezas a restaurar</li>
                </ul>
                ¡Y listo! Nuestros asesores te van a estar respondiendo a la brevedad
            </p>
            <div className="btns">
                <a href='https://wa.link/r1q5wm' target="_blank" rel="noopener noreferrer" className="btn">
                    <img src={WhatsappIcon} alt="Whatsapp logo" />
                    <h4>Contactarte por Whatsapp</h4>
                </a>
                <a href='https://www.instagram.com/a.c.e.a.restauracion/' target="_blank" rel="noopener noreferrer" className="btn">
                <img src={InstagramIcon} alt="Instagram logo" />
                    <h4>Contactarte por Instagram</h4>
                </a>
                <a href='https://www.facebook.com/pulidosacea/' target="_blank" rel="noopener noreferrer" className="btn">
                <img src={FacebookIcon} alt="Facebook logo" />
                    <h4>Contactarte por Facebook</h4>
                </a>
            </div>
            {/* <Link path="presupuesto">
                <div className='pedirPresupuesto'>Pedir presupuesto ya!</div>
            </Link> */}
        </div>
    </section>
    <footer>
        <div className="licencia">
            <h3>Pagina oficial de Acea restauraciones</h3>
            <h4>Todos los derechos reservados 2024©</h4>
        </div>
        <div className="devteam">
            <h3>Desarrolador web: KaselaDev</h3>
            <a href="http://kasela.com.ar" target="_blank" rel="noopener noreferrer">kasela.com.ar</a>
        </div>
    </footer>
    </>
  );
}