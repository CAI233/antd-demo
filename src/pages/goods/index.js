
import React from 'react';
import {Route,Switch} from 'react-router-dom';

import goods from './goods';
import tab5 from './tab5';
import tab6 from './tab6';

const GoodsComponent = ({ match }) => {
    console.log('match',match)
    return (
        <div className="goods-container">
          <Route path={`${match.url}/`} component={goods} />
          <Route path={`${match.url}/tab5`} component={tab5} />
          <Route path={`${match.url}/tab6`} component={tab6} />
        </div>
      )
};
export default GoodsComponent