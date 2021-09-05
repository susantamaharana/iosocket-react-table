import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const listIteam = [
  { item: 'RR/BF Table', id: 1, link:'/' },
  { item: 'Call/Put Table', id: 2, link:'/callput' },
  { item: 'Vol Curve', id: 3, link:'/volcurve'},
  { item: 'Vol Smile', id: 4, link:'/volsmile'},
  { item: 'Heatmaps', id: 5, link:'/heatmaps'},
]

const MuenuBar = ({ listHandler }) => {
  const [activeId, setActiveId] = useState(1)
  return (
    <div className="row">
      <ul className="list-group">
        {listIteam.map((list) => {
          return (
            <NavLink to={list.link}>
              <li
                key={list.id}
                className={
                  activeId === list.id
                    ? 'list-group-item active'
                    : 'list-group-item'
                }
                onClick={() => setActiveId(list.id)}
                aria-hidden="true"
              >
                {list.item}
              </li>
            </NavLink>
          )
        })}
        </ul>
    </div>
  )
}
export default MuenuBar
