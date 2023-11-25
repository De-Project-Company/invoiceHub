import { motion } from "framer-motion";
import QuickActions from "./components/quick-actions";
import RecentNotifications from "./components/recent-notifications";
import RecentTransactions from "./components/recent-transaction";
import RevenueReports from "./components/revenue-report";
import TopStatics from "./components/top-statics";

function DashBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 flex flex-col gap-5 p-10 max-sm:p-4 bg-[#F0F0F4] h-full"
    >
      <TopStatics />
      <RecentTransactions />
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-5 h-full">
        <div className="flex flex-col gap-5">
          <QuickActions />
          <RevenueReports />
        </div>
        <RecentNotifications />
      </div>
    </motion.div>
  );
}

export default DashBoard;
