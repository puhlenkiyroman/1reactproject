import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput"
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context/context";

const Registration = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const registration = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1> Страница для регистрации </h1>
            <form onSubmit={registration}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Registration;