import { Layout } from 'antd';
import { useState } from "react";

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import cookware from "../json/cookware.json";

import NavBar from "../components/NavBar";
import HamMenu from "../components/HamMenu";

const { Header, Content, Footer } = Layout;

function Cookware() {
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
        <AppHeader title="Cookware" />
      </Header>
      <Content className="layout-content">
        <ProductList products={cookware}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
      </Layout>
    </Layout>
  );
}

export default Cookware;
