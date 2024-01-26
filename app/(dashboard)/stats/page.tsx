import { getStatsAction } from "@/utils/action";
import React from "react";

const StatsPage = async () => {
  const stats = await getStatsAction();
  console.log(stats);

  return <div>StatsPage</div>;
};

export default StatsPage;
