import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Awards from "../components/awards";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Awards />
    <Metrics />
  </Layout>
);

export default IndexPage;
