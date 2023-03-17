import ConfigIndex from "@/components/config"
import ConfigHeader from "@/components/config/ConfigHeader"
import Layout from "@/components/layout/layout"

const Config = () => {
    return (
        <Layout
            title="Config"
        >
            <ConfigHeader />
            <ConfigIndex />
        </Layout>
    )
}

export default Config