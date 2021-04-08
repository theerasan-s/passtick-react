import styled from "styled-components";
import { Layout, Menu, Button } from "antd";

const orange = "rgb(255, 102, 0)";
const menuPadding = "12px";

export const WebLogo = styled.img`
  width: 70px;
  height: 50px;
`;

export const LogoContainer = styled.div`
  float: left;
  padding-left: ${menuPadding};
`;

export const Container = styled.div`
  background-color: ${orange};
`;

export const NavigationHeader = styled(Layout.Header)`
  background-color: ${orange};
  height: 48px;
`;

export const NavigationMenu = styled(Menu)<{ isActive: boolean }>`
  float: right;
  display: ${({ isActive }) => (isActive ? "table" : "none")};
  height: 100vh;
`;

export const MenuButton = styled(Button)`
  float: right;
  padding-right: ${menuPadding};
  color: white;
  border-style: none;
`;
