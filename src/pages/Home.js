import { Layout } from "antd";
import { useState } from "react";
import AppHeader from "../components/Header";
import ProductList from "../components/ProductList";
import AppFooter from "../components/Footer";
import products from "../json/products.json";
import NavBar from "../components/NavBar";
import HamMenu from "../components/HamMenu";

const { Header, Content, Footer } = Layout;

function Home(){
    const [open, setopen] = useState(false);

    return(
        <Layout className="container main-layout">
        <NavBar open = {open} />
        <Layout>
        <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        />
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                <ProductList products={products}/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;