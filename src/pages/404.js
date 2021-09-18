import * as React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout"

import { navLinkText } from "../components/layout.module.css"

const NotFoundPage = () => {
  return (
    <Layout  noNav="true" pageTitle="Page Not Found">
      <p>Oops! There's nothing here for you to see.</p>
      <Link to="/" className={navLinkText}>Go back home</Link>
    </Layout>
  );
}

export default NotFoundPage;
