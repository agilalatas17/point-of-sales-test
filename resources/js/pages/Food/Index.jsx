import { usePage } from "@inertiajs/react";
import { Card, Table, Image, Button, Tooltip, Space, Row } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "@inertiajs/react";

export default function FoodPage() {
    const { foods } = usePage().props;

    const columns = [
        {
            key: "no",
            title: "No",
            render: (text, record, index) => index + 1,
            width: 30,
        },
        {
            title: "Nama",
            dataIndex: "nama",
            key: "nama",
        },
        {
            title: "Foto",
            dataIndex: "gambar",
            key: "gambar",
            render: (_, record) => <Image src={record.gambar} width={200} />,
        },
        {
            title: "Harga",
            dataIndex: "harga",
            key: "harga",
            render: (text, record, index) => text,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Tooltip
                    placement="right"
                    title="Hapus"
                    showArrow
                    color="#819A91"
                >
                    <Button
                        size="large"
                        icon={<DeleteOutlined className="text-xl" />}
                        color="danger"
                        variant="solid"
                    />
                </Tooltip>
            ),
        },
    ];

    return (
        <>
            <Card>
                <Row className="mb-8">
                    <Link
                        href="/food/create"
                        className="bg-sky-400 text-white px-8 py-2 rounded hover:bg-sky-400/85 transition-colors duration-300 ease-in-out"
                    >
                        <Space>
                            <PlusOutlined />
                            Tambah Menu
                        </Space>
                    </Link>

                    {/* <Button
                        className="bg-sky-400 text-white hover:bg-sky-400/85 focus:outline-none transition duration-300"
                        icon={<PlusOutlined />}
                        size="large"
                    >
                        Tambah Menu
                    </Button> */}
                </Row>
                <Row>
                    <Table
                        columns={columns}
                        dataSource={foods}
                        pagination={false}
                        className="w-full"
                    />
                </Row>
            </Card>
        </>
    );
}
