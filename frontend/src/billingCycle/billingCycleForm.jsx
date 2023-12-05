import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import LabelAndInput from '../common/form/labelAndInput';
import CreditList from './creditList';

import { init } from './billingCycleActions';
class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits } = this.props;

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Nome"
                        readOnly={readOnly}
                        placeholder="Informe o nome"
                    />
                    <Field
                        name="month"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Mês"
                        placeholder="Informe o mês"
                        readOnly={readOnly}
                        type="number"
                    />
                    <Field
                        name="year"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Ano"
                        placeholder="Informe o ano"
                        readOnly={readOnly}
                        type="number"
                    />
                    <CreditList
                        cols="12 6"
                        list={credits}
                        readOnly={readOnly}
                    >
                    </CreditList>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({ credits: selector(state, 'credits') });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);