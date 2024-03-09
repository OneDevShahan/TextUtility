import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode === 'Dark'? 'dark': 'light'}>
        <div className="container-fluid">
          <span className="navbar-brand" href='/'>{props.title}</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="form-check form-switch m-2">
            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode </label>
          </div>
        </div>
      </nav>
    </div>
  )
}
