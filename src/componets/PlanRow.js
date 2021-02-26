import React from 'react'
import "../styles/PlanRow.css"

function PlanRow() {
    return (
        <div className="planRow">
          <div className="planRow__details">
            <h4>Netflix Standard</h4>
            <p>1080p</p>
           </div>
           <button className="planRow__subscribe">Subscribe</button>
      </div>
    )
}

export default PlanRow
