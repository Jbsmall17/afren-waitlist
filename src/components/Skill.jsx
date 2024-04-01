import React from 'react'

export default function Skill({img,desc}) {
  return (
    <div>
      <img src={img} alt={desc} />
      <p className="desc">{desc}</p>
    </div>
  )
}
