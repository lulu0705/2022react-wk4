
import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
import { useState } from "react";

import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const { productId } = useParams();

   const product = products.find(
      (x) => x.id === productId
   );

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
            <AppHeader title="Product Detail"/>
         </Header>
         <Content className="layout-content">
            <ProductDetail product = {product} />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
      </Layout>
   );
}

export default Product;