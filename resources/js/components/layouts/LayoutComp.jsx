import Layout from "antd/es/layout/layout";
import HeaderComp from "./HeaderComp";

export default function LayoutComp({ children }) {
    const { Content } = Layout;
    return (
        <>
            <Layout>
                <HeaderComp />
                <Content className="mt-14">
                    <main className="px-24 py-10">{children}</main>
                </Content>
            </Layout>
        </>
    );
}
