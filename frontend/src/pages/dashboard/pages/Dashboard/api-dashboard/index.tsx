import { ApiAxiosInterceptor } from "../../../../../react-query";
import {
  ICreateClientRequest,
  ICreateClientResponse,
  ICreateInvoiceRequest,
  IGetNotifications,
  IGetStatics,
} from "../types";

export const createClient = async (data: ICreateClientRequest) => {
  try {
    const response = await ApiAxiosInterceptor.post<ICreateClientResponse>(
      "/customers",
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createInvoice = async (data: ICreateInvoiceRequest) => {
  try {
    const response = await ApiAxiosInterceptor.post<ICreateClientResponse>(
      "/invoices",
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const showStatics = async () => {
  try {
    const response = await ApiAxiosInterceptor.get<IGetStatics>("/dashboard", {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const recentNotifications = async () => {
  try {
    const response = await ApiAxiosInterceptor.get<IGetNotifications>(
      "/notification?page=1&limit=3",
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};