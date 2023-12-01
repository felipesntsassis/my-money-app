import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import TabReducer from '../common/tab/tabReducer';
import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    billingCycle: BillingCycleReducer,
    dashboard: DashboardReducer,
    form: formReducer,
    tab: TabReducer,
    toastr: toastrReducer
});

export default rootReducer;