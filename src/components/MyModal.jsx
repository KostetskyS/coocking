import React, { useState } from 'react'
import '../assets/css/modal.css'
export const MyModal = (props) => {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function closeModal () {
    props.onModalClose()
  }

  function submitUser () {
    alert('Пользователь успешно зарегистрирован')
    props.onModalClose()
  }

  return (
    props.open ? (
      <div id="openModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Login</h3>
              <p onClick={closeModal} className="close">×</p>
            </div>
            <div className="modal-body">    
              <input placeholder='login' type="text" value={login} onChange={(event) => setLogin(event.target.value)} />
              <input placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
              <button onClick={submitUser}>submit</button>
              <p>Ваш логин: {login}</p>
              <p>Ваш пароль: {password}</p>
            </div>
          </div>
        </div>
      </div>
    ) : null
  )
}
