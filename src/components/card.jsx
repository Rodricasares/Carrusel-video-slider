import '../components/card.css'

function Card() {
  return (
    <section>                   
      <div className="container">
      <div className="card">
      <figure>
            <img src='http://www.marruecostrip.com/wp-content/uploads/2019/07/Merzouga-desert.jpg' alt='pueblo_marruecos' />
        </figure>
     
      <div className="info_card">
     
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          interdum ultrices ex, non ullamcorper nisi hendrerit ut. Etiam ut
          augue mauris.
        </p>
        <button>Más info</button>
        </div>
      </div>

      {/* CARD 2 */}

      <div className="card">
      <figure>
            <img src='http://www.marruecostrip.com/wp-content/uploads/2019/07/Fes-city.jpg' alt='pueblo_marruecos' />
        </figure>
     
      <div className="info_card">
     
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          interdum ultrices ex, non ullamcorper nisi hendrerit ut. Etiam ut
          augue mauris.
        </p>
        <button>Más info</button>
        </div>
      </div>

      {/* CARD 3 */}

      <div className="card">
      <figure>
            <img src='http://www.marruecostrip.com/wp-content/uploads/2019/07/de8dded6ddd3f2e148bca6e8521f6281.jpg' alt='pueblo_marruecos' />
        </figure>
     
      <div className="info_card">
     
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          interdum ultrices ex, non ullamcorper nisi hendrerit ut. Etiam ut
          augue mauris.
        </p>
        <button>Más info</button>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Card;
