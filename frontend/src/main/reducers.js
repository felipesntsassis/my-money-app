import { combineReducers } from 'redux';

import TabReducer from '../common/tab/tabReducer';
import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducer;