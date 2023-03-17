import { ObjectDynamicI } from "@/interfaces/general/general.interface";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseProvider {
    private instance: AxiosInstance;

    constructor(url: string) {
        this.instance = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    protected async get<T extends ObjectDynamicI>(url: string, config?: AxiosRequestConfig) {
        return await this.instance.get<T>(url, config);
    }

    protected async post(url: string, data: any, config?: AxiosRequestConfig) {
        return await this.instance.post(url, data, config);
    }

    protected async patch(url: string, data: any, config?: AxiosRequestConfig) {
        return await this.instance.patch(url, data, config);
    }

    protected async delete(url: string, config?: AxiosRequestConfig) {
        return await this.instance.delete(url, config);
    }
}