import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import { connect } from 'react-redux';
import If from '../common/operador/if';
import Input from '../common/form/input';
import Grid from '../common/layout/grid';

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
        }
    }

    renderRows() {
        const list = this.props.list || [];

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field
                        name={`${this.props.field}[${index}].name`}
                        component={Input}
                        placeholder="Informe o nome"
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td>
                    <Field
                        name={`${this.props.field}[${index}].value`}
                        component={Input}
                        placeholder="Informe o valor"
                        readOnly={this.props.readOnly}
                    />
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field
                            name={`${this.props.field}[${index}].status`}
                            component={Input}
                            placeholder="Informe o status"
                            readOnly={this.props.readOnly}
                        />
                    </td>
                </If>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.add(index + 1)}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => this.add(index + 1, item)}
                    >
                        <i className="fa fa-copy"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.remove(index)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index);
        }
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className="table-action">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchProps)(ItemList);
