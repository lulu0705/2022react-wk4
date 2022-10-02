import { Layout } from 'antd';
import { useState } from "react";

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import homeAccessories from "../json/home-accessories.json";

import NavBar from "../components/NavBar";
import HamMenu from "../components/HamMenu";

const { Header, Content, Footer } = Layout;

function HomeAccessories() {
  const [open, setopen] = useState(false);

  return (
    <Layout className="container main-layout">
      <NavBar open = {open} />
      <Layout>
      <HamMenu
        onClick={() => setopen(!open)}
        open={open}
      />
      <Header className="layout-header">
        <AppHeader title="Home Accessories" />
      </Header>
      <Content className="layout-content">
        <ProductList products={homeAccessories} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default HomeAccessories;
