import React from 'react'

function Namelist() {
    const names = ['Alpha','Beta','Gamma']
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
      <div>{nameList}</div>
  )
}

export default Namelist
