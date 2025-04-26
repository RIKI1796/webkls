import "./styles/Card.css";
import Ft from "../assets/ftclass.jpg";
import { useEffect } from "react";

function Card() {
  useEffect(() => {});
  return (
    <>
      <div className="wrapper">
        <div className="card-container">
          <div className="container">
            <input type="radio" name="slide" id="c1" />
            <label htmlFor="c1" className="card">
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4>Dark Waves</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Abstract </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Black Box</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" defaultChecked />
            <label
              htmlFor="c4"
              className="card"
              style={{ backgroundImage: `url(${Ft})` }}
            >
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>Red Sun</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c5" />
            <label htmlFor="c5" className="card">
              <div className="row">
                <div className="icon">5</div>
                <div className="description">
                  <h4>Snow Mountain</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c6" />
            <label htmlFor="c6" className="card">
              <div className="row">
                <div className="icon">6</div>
                <div className="description">
                  <h4>NIGGA</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c7" />
            <label htmlFor="c7" className="card">
              <div className="row">
                <div className="icon">7</div>
                <div className="description">
                  <h4>White Rounds</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>


      <section className="details">
        <h1>Details</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus neque corrupti corporis, sit repellat
            quidem? Voluptatum tempore provident soluta a beatae libero ullam vitae saepe eos corporis amet
            consequuntur, quae quia magnam rerum recusandae in debitis asperiores natus, velit cum qui dolore.
            Accusantium nobis ut suscipit eligendi dolorum voluptatem illum.</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus neque corrupti corporis, sit repellat
            quidem? Voluptatum tempore provident soluta a beatae libero ullam vitae saepe eos corporis amet
            consequuntur, quae quia magnam rerum recusandae in debitis asperiores natus, velit cum qui dolore.
            Accusantium nobis ut suscipit eligendi dolorum voluptatem illum.  Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Delectus neque corrupti corporis, sit repellat quidem? Voluptatum tempore provident soluta
            a beatae libero ullam vitae saepe eos corporis amet consequuntur, quae quia magnam rerum recusandae in
            debitis asperiores natus, velit cum qui dolore. Accusantium nobis ut suscipit eligendi dolorum voluptatem
            illum.</p>
            
    </section>
    </>
  );
}

export default Card;
