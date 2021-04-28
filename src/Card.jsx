import './Card.css';
const Card = (props) => {

return(
  <>



<div class="col box-item">
    <div class="card">
      <img

        src={props.src}
        
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h2 class="card-title">{props.nom}</h2>
        <p class="card-text">
         
        {props.texte}
          
        </p>
      </div>
    </div>
  </div>


  </>
)

}
export default Card;