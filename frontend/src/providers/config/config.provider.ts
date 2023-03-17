import { BaseProvider } from "@/helpers/axios/axios";
import { ConfigI } from "@/interfaces/config/config.interface";

class ConfigProvider extends BaseProvider {
    constructor() {
        super("/config");
    }

    public async getConfig() {
        return await this.get<ConfigI>("");
    }

    public async uploadConfig(data: ConfigI) {
        return await this.post("", data)
    }
}

const configProvider = new ConfigProvider();
export default configProvider;