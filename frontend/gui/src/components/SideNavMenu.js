import React, {Component} from 'react';
import axios from 'axios';

import { Menu } from 'antd';
import { ApiTwoTone } from '@ant-design/icons';

const { SubMenu } = Menu;

class SideNavMenu extends Component {

    state = {
        apis: [ ]
    }

    componentDidMount() {
        let url = "http://127.0.0.1:8888/api/rest/";

        axios.get(url)
            .then( res => {
                this.setState({
                    apis: res.data
                });
                console.log(res.data);
            });
    }

    render(){
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                theme="light"
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    this.state.apis.map((api) => (
                        <SubMenu
                            key={api.id}
                            title={
                                    <span>
                                        <span>{api.name}</span>
                                    </span>
                            }
                            icon={<ApiTwoTone />}
                        >
                            {/*
                                api.services.map((service) => (
                                    <Menu.Item key={service.id}>
                                        {service.name}
                                    </Menu.Item>
                                ))
                            */}
                        </SubMenu>
                    ))
                }
            </Menu>
        );
    }
}

export default SideNavMenu;
