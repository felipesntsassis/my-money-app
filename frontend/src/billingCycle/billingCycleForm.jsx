import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import labelAndInput from '../common/form/labelAndInput';

import { init } from './billingCycleActions';
class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props;

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={labelAndInput}
                        cols="12 4"
                        label="Nome"
                        readOnly={readOnly}
                        placeholder="Informe o nome"
                    />
                    <Field
                        name="month"
                        component={labelAndInput}
                        cols="12 4"
                        label="Mês"
                        placeholder="Informe o mês"
                        readOnly={readOnly}
                        type="number"
                    />
                    <Field
                        name="year"
                        component={labelAndInput}
                        cols="12 4"
                        label="Ano"
                        placeholder="Informe o ano"
                        readOnly={readOnly}
                        type="number"
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({ form: 'billingCicleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);