import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabContent from '../common/tab/tabContent';
import TabHeader from '../common/tab/tabHeader';
import Tabs from '../common/tab/tabs';
import TabsContent from '../common/tab/tabsContent';
import TabsHeader from '../common/tab/tabsHeader';
import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import { create, init, remove, update } from './billingCycleActions';
import Form from './billingCycleForm';
import List from './billingCycleList';

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader
                    title="Ciclos de Pagamentos"
                    small="Cadastro"
                />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label="Listar"
                                icon="bars"
                                target="tabList"
                            />
                            <TabHeader
                                label="Incluir"
                                icon="plus"
                                target="tabCreate"
                            />
                            <TabHeader
                                label="Alterar"
                                icon="pencil"
                                target="tabUpdate"
                            />
                            <TabHeader
                                label="Excluir"
                                icon="trash-o"
                                target="tabDelete"
                            />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form 
                                    onSubmit={this.props.create}
                                    submitLabel="Incluir"
                                    submitClass="primary"
                                />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form
                                    onSubmit={this.props.update}
                                    submitLabel="Alterar"
                                    submitClass="info"
                                />
                            </TabContent>
                            <TabContent id="tabDelete">
                            <Form 
                                onSubmit={this.props.remove}
                                readOnly={true}
                                submitLabel="Excluir"
                                submitClass="danger"
                            />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, init, remove, update }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);