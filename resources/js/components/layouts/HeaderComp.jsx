import { useState } from "react";
import { Layout, Menu, Row, Col, Space } from "antd";
import { Link } from "@inertiajs/react";

export default function HeaderComp() {
    const pathname = window.location.pathname;
    const [current, setCurrent] = useState(pathname);
    const { Header } = Layout;

    const onClick = (values) => {
        setCurrent(values.key);
    };

    // const MENU_ITEMS = [
    //     {
    //         key: "/food",
    //         label: "Food",
    //     },
    //     {
    //         key: "/transaksi",
    //         label: "transaksi",
    //     },
    // ];
    const MENU_ITEMS = [
        {
            key: "/food",
            label: <Link href="/food">Food</Link>,
        },
        {
            key: "/transaksi",
            label: <Link href="/transaksi">Transaksi</Link>,
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
                    align="center"
                    className="bg-sky-400 px-32 h-14"
                >
                    <Col span={24}>
                        <Space className="h-14" size="large">
                            <img
                                src="/assets/icons/foodIcon.png"
                                className="block"
                                width={40}
                                height={40}
                            />
                            <h1 className="text-white text-2xl">Alan Resto</h1>
                        </Space>
                    </Col>
                </Row>
                <Row
                    wrap={false}
                    justify="start"
                    align="middle"
                    className="px-32 bg-white"
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
