import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "../../../../../design-system";
import { RouteNames } from "../../../../../routers/interface";
import { useQuery } from "react-query";
import { getInvoiceById } from "../invoice-api";
import dayjs from "dayjs";

function InvoiceDetailPage() {
  const { invoiceId } = useParams();

  const { data } = useQuery(["getInvoiceById"], () =>
    getInvoiceById(invoiceId!)
  );

  const invoice = data?.data[0];

  const customers = invoice?.customers[0];

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-color-gray h-screen"
    >
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            onClick={() => navigate(RouteNames.INVOICE)}
            icon={faArrowLeft}
            fontSize={24}
            className="text-gray-300 cursor-pointer"
          />
          <Typography variant="h6">{invoiceId}</Typography>
          {invoice?.status === "pending" ? (
            <Typography
              className="!text-[#F27E3B] !border px-[13.5px] py-[1.5px] !border-[#F27E3B] !bg-orange-50 !rounded-xl"
              variant={"body4"}
              color={"gray.600"}
            >
              {invoice?.status}
            </Typography>
          ) : (
            <Typography
              className="!text-[#3C6F30] !border px-[25px] py-[1.5px] !bg-green-50 !border-[#3C6F30] !rounded-xl"
              variant={"body4"}
              color={"gray.600"}
            >
              {invoice?.status}
            </Typography>
          )}
        </div>
        <Button>Generate Invoice</Button>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <div className="px-4 py-5 w-full rounded-lg bg-white border border-gray-100">
          <Typography fontWeight={600} variant="body3" color="gray.100">
            INVOICE INFORMATION
          </Typography>
          <div className="flex gap-10 items-center my-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Invoice ID
            </Typography>
            <Typography variant="body4">: {invoice?.id} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Issue Date
            </Typography>
            <Typography variant="body4">
              : {dayjs(invoice?.created_date).format("MMMM D, YYYY")}{" "}
            </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Due Date
            </Typography>
            <Typography variant="body4">
              : {dayjs(invoice?.due_date).format("MMMM D, YYYY")}{" "}
            </Typography>
          </div>
        </div>

        <div className="px-4 py-5 w-full rounded-lg bg-white border border-gray-100">
          <Typography fontWeight={600} variant="body3" color="gray.100">
            CLIENT INFORMATION
          </Typography>
          <div className="flex gap-10 items-center my-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Name
            </Typography>
            <Typography variant="body4">: {customers?.name} </Typography>
          </div>
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Email address
            </Typography>
            <Typography variant="body4">: {customers?.email} </Typography>
          </div>
          {/* <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Phone number
            </Typography>
            <Typography variant="body4">
              : {customers?.phone_number}{" "}
            </Typography>
          </div> */}
          <div className="flex gap-10 items-center mb-4">
            <Typography className="!w-40" variant="body4" fontWeight={600}>
              Address
            </Typography>
            <Typography variant="body4">
              : {customers?.business_address}
            </Typography>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InvoiceDetailPage;
