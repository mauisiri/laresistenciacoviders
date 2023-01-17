import React from 'react';
import '../landing-spreads/spreads.css';
import 'bootstrap/dist/css/bootstrap.css';
import spreadsdesinfec from '../../../../img/icons/spreadsdesinfec.jpg';
import spreadsmask from '../../../../img/icons/spreadsmask.jpg';
import spreadsmedica from '../../../../img/icons/spreadsmedica.jpg';
import spreadsmedicarub from '../../../../img/icons/spreadsmedicarub.jpg';
import spreadsmocos from '../../../../img/icons/spreadsmocos.jpg';
import spreadstos from '../../../../img/icons/spreadstos.jpg';


const spreads = () => {
  return (

<>
      <section class="spreads mt-5 mb-5 container">
        <h3 class="spreadspeq text-center fs-5">Spreads</h3>
        <h2 class="spreadsxl text-center display-3 fw-bold">
          Disease spreads from person to person
        </h2>
        <div class="spreads-cards-content mt-5 row">
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadsmocos} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Wear Facemask
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100.
              </p>
            </div>
          </div>
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadsmedicarub} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Wash your hangs often
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Coughing is another ky sympie but it's not just any cough, said Schaffner, It should be a dry cough that vou feel in vour chest.
              </p>
            </div>
          </div>
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadstos} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Keep social distance
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Shortness of breath can be a third -- and very serious -- maniestation of Covid-19. and it can occur on its own, without a cough.

              </p>
            </div>
          </div>
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadsmask} alt="banner-img"/>
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Wear facemask
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100.
              </p>
            </div>
          </div>
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadsmedica} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Wash your hangs often
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Coughing is another ky sympie but it's not just any cough, said Schaffner, It should be a dry cough that vou feel in vour chest.
              </p>
            </div>
          </div>
          <div class="card-spreads col-md-6 col-lg-4 p-3 h-100">
            <div class="spreadscard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={spreadsdesinfec} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Keep social distance
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Shortness of breath can be a third -- and very serious -- maniestation of Covid-19. and it can occur on its own, without a cough.
              </p>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default spreads