import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserApi from "../api/userApi";
import { Alert, Snackbar } from "@mui/material";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const RegistrationUser = () => {
  const { registerUser } = useUserContext();
  const navigate = useNavigate();
    // variabili per toast
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');
    const vertical = 'bottom';
    const horizontal = 'right';

    const closeToast = () => {
        setOpen(false);
    }


  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    ripetiPassword: "",
    accetto: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const [ formValido, setFormValido ] = useState(false);

  const handleOnChange = (evento) => {
    setFormValues({ ...formValues, [evento.target.name]: evento.target.type !== 'checkbox' ? evento.target.value.trim() : evento.target.checked });
    if(evento.target.name === 'ripetiPassword' || evento.target.name === 'password'){
      convalidaPassword();
    }

  };


  const validazioneCampi = (evento) => {
    const { name, value } = evento.target;

    if (value.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Questo campo è obbligatorio",
      }));
    } else {
      if (name === "email") {
        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        if (!emailRegex.test(value)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Il campo email deve contenere una mail valida",
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined,
          }));
        }
      } else if (name === "password") {
        const passwordlRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        if (!passwordlRegex.test(value)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Il campo password deve contenere un <strong>numero</strong>, una maiuscola, una minuscola ed un carattere speciale",
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined,
          }));
        }
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: undefined,
        }));
      }
    }
  };


  const convalidaPassword = () => {
    const password = formValues.password;
    const ripetiPassword = formValues.ripetiPassword;

    if(password !== ripetiPassword) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        ripetiPassword: 'le password non corrispondono'
      }));
      return false;
    } else {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        ripetiPassword: undefined
      }));
      return true;
    }
  }
 

  async function onSubmitForm(event) {
    event.preventDefault();
    console.log("campi del form ", formValues);

    const utente = {
      name: formValues.name,
      email: formValues.email,
    }

    try {
      const dati = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      }
      const response = await UserApi.insertUser(dati);
      if(response && response.status === 200) {
        setSeverity('success');
        setMessage('utente registrato con successo');
        setOpen(true);
        registerUser(utente);

        setTimeout(() => {
           navigate('/');
        }, 4000)
        
       
      } else {
        setSeverity('error');
        setMessage('Errore registrazione utente');
        setOpen(true);
      }
    } catch (error) {
      
    }

    
  }


  useEffect(() => {
    const isFormValid = Object.values(formErrors).every((error) => !error);
    const campiCompilati = Object.values(formValues).every((value) => value !== undefined && value !== null && value !== "" && value !== false && value !== 'false');

    // if(isFormValid && campiCompilati){
    //   setFormValido(true)
    // }

    setFormValido(isFormValid && campiCompilati);

    console.log(campiCompilati);



  }, [formValues, formErrors] )

  useEffect(() => {
    convalidaPassword()
  }, [ formValues.password, formValues.ripetiPassword] )

  return (
    <Contenitore>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-0">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 p-md-5">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Modulo di Registrazione
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={onSubmitForm}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="name"
                              className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                              name="name"
                              value={formValues.name}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="name">
                              Il tuo nome
                            </label>
                            { formErrors.name && (
                                <p className="help is-danger">{formErrors.name}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="email"
                              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                              name="email"
                              value={formValues.email}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="email">
                              La tua email
                            </label>
                            { formErrors.email && (
                                <p className="help is-danger">{formErrors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <Input.Password
                              type="password"
                              id="password"
                              size="large"
                              className={`${formErrors.password ? 'is-invalid' : ''}`}
                              name="password"
                              value={formValues.password}
                              onChange={handleOnChange}
                              onBlur={validazioneCampi}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            { formErrors.password && (
                                <p className="help is-danger">
                                  <ul>
                                    <li>Il campo password deve contenere un <strong>numero</strong></li>
                                    <li>una maiuscola</li>
                                    <li>una minuscola ed un carattere speciale</li>
                                  </ul>
                                </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <Input.Password
                              size="large"
                              type="password"
                              id="ripetiPassword"
                              className={` ${formErrors.ripetiPassword ? 'is-invalid' : ''}`}
                              name="ripetiPassword"
                              value={formValues.ripetiPassword}
                              onChange={handleOnChange}
                              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <label
                              className="form-label"
                              htmlFor="ripetiPassword"
                            >
                              Ripeti password
                            </label>
                            { formErrors.ripetiPassword && (
                                <p className="help is-danger">{formErrors.ripetiPassword}</p>
                            )}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className={`form-check-input me-2 ${formErrors.accetto ? 'is-invalid' : ''}`}
                            type="checkbox"
                            value={formValues.accetto}
                            id="accetto"
                            name="accetto"
                            onChange={handleOnChange}
                          />
                          <label className="form-check-label" htmlFor="accetto">
                            Accetto i termini del contratto
                          </label>
                          { formErrors.accetto && (
                                <p className="help is-danger">{formErrors.accetto}</p>
                            )}
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            disabled={!formValido}
                          >
                            Registrati
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 colonna-dx" style={{backgroundImage: `url(https://media.istockphoto.com/id/1303370330/it/foto/flat-lay-di-amici-che-hanno-una-festa-a-casa-in-quarantena-con-fast-food.jpg?s=1024x1024&w=is&k=20&c=X5lY-JpahjWI2APGoqTo8Rfp-AbplkBMdneoQ2G1BE4=)`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Snackbar open={open} autoHideDuration={4000} onClose={closeToast} anchorOrigin={{ vertical, horizontal}}>
                <Alert onClose={closeToast} severity={severity} variant="filled">
                    {message}
                </Alert>
      </Snackbar>
    </Contenitore>
  );
};

const Contenitore = styled.div`
.colonna-dx {
    background-size: cover;
    border-radius: 0 20px 20px 0;
    background-size: cover;
    background-repeat: no-repeat;
}
p.help.is-danger {
    font-size: 12px;
    font-weight: bold;
    color: #8e210a;
    margin-top: -10px;
}
`;
export default RegistrationUser;