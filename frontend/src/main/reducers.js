import { combineReducers } from 'redux';

import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import TabReducer from '../common/tab/tabReducer';
import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducer;