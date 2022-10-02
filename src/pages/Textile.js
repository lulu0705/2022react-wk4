import { Layout } from 'antd';
import { useState } from "react";

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import textile from "../json/textile.json";

import NavBar from "../components/NavBar";
import HamMenu from "../components/HamMenu";

const { Header, Content, Footer } = Layout;

function Textile() {
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
        <AppHeader title="Textile" />
      </Header>
      <Content className="layout-content">
        <ProductList products={textile} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Textile;
