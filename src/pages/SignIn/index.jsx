import { Background, Container, Form } from './styles';
import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicacao para salvar e gerenciar seus links</p>

                <h2>Faca seu login</h2>

                <Input
                    placeholder='Email'
                    type='Text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />  

                <Button title="Entrar"/>

                <a href='#'>
                    Criar conta
                </a>
            </Form>
            <Background />
        </Container>
    )
}