import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!');
                dispatch([
                    resetForm('billingCicleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]);
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCicleForm', billingCycle)
    ];
}