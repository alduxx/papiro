import React, {Component} from 'react';

import { Menu } from 'antd';
import { MailOutlined, ApiTwoTone } from '@ant-design/icons';

const { SubMenu } = Menu;

class SideNavMenu extends Component {
    state = {
        apis: [
            {
                id: 1,
                name: "Brasilseg",
                services: [
                    {
                        id: 1,
                        name: "consulta"
                    },
                    {
                        id: 2,
                        name: "contrata"
                    }

                ]
            }, 
            {
                id: 2,
                name: "Brasilprev",
                services: [
                    {
                        id: 3,
                        name: "lista"
                    },
                    {
                        id: 4,
                        name: "apaga"
                    }

                ]
            }, 
        ]
    }

    render(){
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                theme="dark"
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
                            {
                                api.services.map((service) => (
                                    <Menu.Item key={service.id}>
                                        {service.name}
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        );
    }
}

export default SideNavMenu;
