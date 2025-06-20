import { Row, Col, Card } from "antd";

export default function TransaksiPage() {
    const { Meta } = Card;
    return (
        <>
            <Row gutter={[32, 0]}>
                <Col span={16}>
                    <Row gutter={[0, 32]} className="gap-x-16">
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    height={228}
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                className="text-center"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    height={228}
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                className="text-center"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    height={228}
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                className="text-center"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    height={228}
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                className="text-center"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    height={228}
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                                className="text-center"
                            />
                        </Card>
                    </Row>
                </Col>
                <Col span={8}>
                    <Card>
                        <h2 className="text-center">Pesanan</h2>

                        <main>
                            <img src="" alt="" />
                        </main>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
