import React from 'react'

import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

type Props = {
    onLogin: () => void
}

const LoginGoogleButton = ({ onLogin }: Props) => {
    return (
        <div>
            {onLogin && (
                <Button icon={<GoogleOutlined />} onClick={onLogin}>
                    Sign in with Google
                </Button>
            )}
        </div>
    )
}

export default LoginGoogleButton
