import { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";

export default function HeaderComp() {
    const pathname = window.location.pathname;
    const [current, setCurrent] = useState(pathname);
    const { Header } = Layout;

    const onClick = (values) => {
        setCurrent(values.key);
    };

    const MENU_ITEMS = [
        {
            key: "/food",
            label: "Food",
        },
        {
            key: "/transaksi",
            label: "Transaksi",
        },
    ];
    return (
        <>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 99,
                    width: "100%",
                }}
                className="bg-white p-0 shadow-md"
            >
                <Row
                    wrap={false}
                    justify="start"
                    align="middle"
                    className="bg-sky-400 px-14 h-14"
                >
                    <Col span={24}>
                        <h1 className="text-red-400 text-2xl">Alan Resto</h1>
                    </Col>
                </Row>
                <Row
                    wrap={false}
                    justify="start"
                    align="middle"
                    className="px-14 bg-white"
                >
                    <Col span={24}>
                        <Menu
                            mode="horizontal"
                            items={MENU_ITEMS}
                            onClick={onClick}
                            selectedKeys={[current]}
                        />
                    </Col>
                </Row>
            </Header>
        </>
    );
}
