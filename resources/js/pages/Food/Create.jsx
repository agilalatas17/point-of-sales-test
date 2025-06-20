import {
    Card,
    Form,
    Button,
    Input,
    Upload,
    message,
    InputNumber,
    Flex,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

export default function CreateFoodPage() {
    const { Dragger } = Upload;

    const props = {
        name: "file",
        multiple: false,
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };
    return (
        <>
            <div className="h-[78vh]">
                <Card size="small">
                    <h3 className="text-blue-400 mb-8">Tambahkan Menu</h3>

                    <Form
                        name="create-menu-form"
                        layout="vertical"
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item label="Nama Menu" name="nama">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Gambar Menu" name="gambar">
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                    Click or drag file to this area to upload
                                </p>
                            </Dragger>
                        </Form.Item>
                        <Form.Item label="Harga" name="harga">
                            <InputNumber defaultValue={0} addonBefore="Rp" />
                        </Form.Item>

                        <Flex justify="flex-end">
                            <Button
                                className="bg-green-600 px-16 py-6 text-white mt-10 mb-6 font-medium hover:bg-green-500 hover:focus:outline-none"
                                htmlType="submit"
                                size="large"
                            >
                                Simpan
                            </Button>
                        </Flex>
                    </Form>
                </Card>
            </div>
        </>
    );
}
