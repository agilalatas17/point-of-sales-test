import Layout from "antd/es/layout/layout";
import HeaderComp from "./HeaderComp";

export default function LayoutComp({ children }) {
    const { Content } = Layout;
    return (
        <>
            <Layout>
                <HeaderComp />
                <Content className="mt-14">
                    <main className="min-h-[87.7vh] bg-blue-300 px-14">
                        {children}
                    </main>
                </Content>
            </Layout>
        </>
    );
}
