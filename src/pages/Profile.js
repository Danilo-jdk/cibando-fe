import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";
import UserApi from "../api/userApi";
import moment from 'moment';


const Profile = () => {
    const [dati, setDati] = useState({});
    const { email } = useContext(AuthContext);

    async function getUser() {
        try {
            const response = await UserApi.getDetail(email);
            if(response.data) {
                setDati(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Contenitore>
         {dati && (
               <>
                   Ciao {dati.name} ecco il riepilogo dei tuoi dati:
                   <ul>
                       <li>Nome: {dati.name}</li>
                       <li>Email: {dati.email}</li>
                       <li>Ruolo: {dati.role}</li>
                       <li>Note: {dati.note !== null ? dati.note : 'Nessuna nota'}</li>
                       <li>Iscritto dal: {moment(dati.createdAt).locale('it').format('ddd DD MM YYYY')}</li>
                   </ul>
                </>
         )}
        </Contenitore>
    )
}

const Contenitore = styled.div `

`

export default Profile;