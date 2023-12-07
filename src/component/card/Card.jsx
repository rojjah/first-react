import React from 'react'

const Card = () => {
  return (
    <div className='d-flex justify-content-around'>
      <div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/19329313/pexels-photo-19329313/free-photo-of-a-woman-in-a-black-coat-and-white-shirt-posing-in-front-of-a-glass-door.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/4048598/pexels-photo-4048598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


    </div>
  )
}

export default Card
