import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, signup } from './authActions';
import Row from '../common/layout/row';
import Grid from '../common/layout/grid';
import If from '../common/operator/if';
import Messages from '../common/msg/messages';
import Input from '../common/form/inputAuth';

import './auth.css';

class Auth extends Component {
    
    constructor(props) {
        super(props);
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode });
    }

    onSubmit(values) {
        const { login, signup } = this.props;
        this.state.loginMode ? login(values): signup(values);
    }

    render() {
        const { loginMode } = this.state;
        const { handleSubmit } = this.props;

        return (
            <div className='login-box'>
                <div className='login-logo'>
                    <b> My</b> Money
                </div>
                <div className='login-box-body'>
                    <p className='login-box-msg'>
                        Bem vindo!
                    </p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field
                            component={Input}
                            name='name'
                            hide={loginMode}
                            icon='user'
                            placeholder='Nome'
                            type='input'
                        />
                        <Field
                            component={Input}
                            name='email'
                            icon='envelope'
                            placeholder='E-mail'
                            type='email'
                        />
                        <Field
                            component={Input}
                            name='password'
                            icon='lock'
                            placeholder='Senha'
                            type='password'
                        />
                        <Field
                            component={Input}
                            name='confirm_password'
                            hide={loginMode}
                            icon='lock'
                            placeholder='Senha'
                            type='password'
                        />
                        <Row>
                            <Grid cols='4'>
                                <button
                                    className='btn btn-primary btn-block btn-flat'
                                    type='submit'
                                >
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br/>
                    <a onClick={() => this.changeMode()}>
                        {loginMode ? 'Novo usuário? Rgistrar aqui!' : 'Já é cadastrado? Entrar aqui!'}
                    </a>
                </div>
                <Messages/>
            </div>
        );
    }
}

Auth = reduxForm({form: 'authForm'})(Auth);
const mapDispatchToProps = dispatch => bindActionCreators({login, signup}, dispatch);

export default connect(null, mapDispatchToProps)(Auth);

