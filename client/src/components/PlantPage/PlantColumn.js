import React from 'react'
import PlantCard from './PlantCard'

function PlantColumn() {
    return (
        <div className="container">
      <div className="row">
        <div className="col-sm">
          <PlantCard />
        </div>
        <div className="col-sm">
          <PlantCard />
        </div>
        <div className="col-sm">
          <PlantCard />
        </div>
      </div>
    </div>
    )
}

export default PlantColumn
