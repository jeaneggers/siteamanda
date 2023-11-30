import './home.css';


export default function Home() {
  return (<>
  <div className='background-menu'>

      <div className='tamanho'>
      <img src="Logotipo.svg" alt="" className='logotipo' />
      </div>
      <div className='tamanho'>
      <button className='buttonMenu'>PROJETOS</button>
      <button className='buttonMenu'>PUBLICAÇÕES</button>
      <button className='buttonMenu'>ESCRITÓRIO</button>
      <button className='buttonMenu'>ORÇAMENTO</button>
      </div>
      <div className='tamanho centralizar'>
      <img className='Icon' src="instagram.svg" alt="Instagram"/>
      <img className='Icon' src="whatsapp.svg" alt="WhatsApp"/>
      <img className='Icon' src="facebook.svg" alt="Facebook"/>
      <img className='Icon' src="linkedin.svg" alt="LinkedIn"/>
      </div>
      <div className='background-menu-barra'></div>
  </div>

  <div className='projetos'>
      <div className='container-projetos'>
              <figure className='effect-lily'>
                <img src="img_projeto_casa_so.png" alt="" />
                  <figcaption>
                    <div>
                      <h2>CASA | UM</h2>
                    </div>
                    <a href="#"></a>
                  </figcaption>
              </figure>
            {/* Segunda imagem */}
            <figure className='effect-lily'>
                <img src="img_projeto_casa_20.png" alt="" />
                  <figcaption>
                    <div>
                      <h2>CASA | DOIS</h2>
                    </div>
                    <a href="#"></a>
                  </figcaption>
              </figure>
              <figure className='effect-lily'>
                <img src="img_projeto_casa_so.png" alt="" />
                  <figcaption>
                    <div>
                      <h2>CASA | TRÊS</h2>run
                    </div>
                    <a href="#"></a>
                  </figcaption>
              </figure>
              <figure className='effect-lily'>
                <img src="img_projeto_casa_20.png" alt="" />
                  <figcaption>
                    <div>
                      <h2>CASA | QUATRO</h2>
                    </div>
                    <a href="#"></a>
                  </figcaption>
              </figure>
              <figure className='effect-lily'>
                <img src="img_projeto_casa_so.png" alt="" />
                  <figcaption>
                    <div>
                      <h2>CASA | CINCO</h2>
                    </div>
                    <a href="#"></a>
                  </figcaption>
              </figure>
      </div>
  </div>
  </>)
  }
