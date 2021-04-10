import React from 'react'

import { AppLogo, Container } from './styled'
import { Row, Col } from 'antd'

import logo from '../../images/logo.png'
import useLoginAction from './useLoginAction'
import LoginGoogleButton from '../../components/LoginGoogleButton/LoginGoogleButton'

const LoginPage = () => {
    const { onSignInWithGoogle } = useLoginAction()

    return (
        <div>
            <Container>
                <Row align="middle">
                    <Col span={24}>
                        <AppLogo src={logo} />
                    </Col>
                    <Col span={24}>
                        <LoginGoogleButton onLogin={onSignInWithGoogle} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage
