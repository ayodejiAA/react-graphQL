import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../containers/collections-overview.container";
import CollectionPage from "../../containers/collection.container";

const ShopPage = ({ match, history }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
