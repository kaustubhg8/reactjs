import React from 'react'

export default function AlertComp(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert}</strong> 
  <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close" style={{float:'right'}}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
