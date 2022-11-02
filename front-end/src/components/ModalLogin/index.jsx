import imagemPrincipal from './assets/login.png'
import style from './ModalLogin.module.scss'
import { ModalBase } from "../ModalBase"
import Formulario from '../Formulario'


const ModalLogin = ({ aberto, aoFechar }) => {

    const listLogin = [
        {
            label:'email',
            id:'email',
            type: 'text',
            placeholder:'Digite seu e-mail',
            
        },
        {
            label:'senha',
            id:'senha',
            type: 'password',
            placeholder:'Digite sua senha',
            
        }
    ]

    return (
        <ModalBase 
        aberto={aberto}
        aoFechar={aoFechar}
        > 

        <section className={style.corpoModalCadastro}>
            <figure>
                <img className src={imagemPrincipal} alt="pessoa segurando uma chave" />
            </figure>
            <div className={style.container}>
            <Formulario list ={listLogin} nomeBotao="Login" titulo="Login"/>
    
            </div>
            
        </section>
        </ModalBase>
    )
        

    
}

export default ModalLogin