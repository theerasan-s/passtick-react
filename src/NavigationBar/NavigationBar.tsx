import React from 'react'
import { Row, Col, Menu } from 'antd'
import {
    WebLogo,
    LogoContainer,
    Container,
    MenuButton,
    NavigationMenu,
} from './styled'
import logo from './logo.png'
import { Text } from '../components/Typography/Typography'
import {
    MenuOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons'
import useNavigationAction from './hooks/useNavigationAction'

const NavigationBar = () => {
    const { isCollapse, handleMenuItemClicked } = useNavigationAction()
    const { SubMenu } = Menu

    return (
        <div>
            <NavigationMenu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                isActive={isCollapse}
                inlineCollapsed={isCollapse}
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    Option 3
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    icon={<MailOutlined />}
                    title="Navigation One"
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    icon={<AppstoreOutlined />}
                    title="Navigation Two"
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </NavigationMenu>
            <Container>
                <Row align="middle">
                    <Col span={12}>
                        <LogoContainer>
                            <WebLogo src={logo} />
                            <Text fontSize={14}>Passtick</Text>
                        </LogoContainer>
                    </Col>
                    <Col span={12}>
                        <MenuButton
                            icon={<MenuOutlined />}
                            ghost={true}
                            onClick={handleMenuItemClicked}
                        />
                    </Col>
                </Row>
            </Container>
            {/* <div>
        <LogoContainer>
          <WebLogo src={logo} />
          <Text fontSize={14}>Passtick</Text>
        </LogoContainer>
        <div>
          <MenuOutlined />
        </div>
      </div> */}
        </div>
    )
}

export default NavigationBar
