import React from "react";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
const Home = () => {
  const MONTHS = useMemo(
    () => [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg1YWU3ZTkwZjY3OWRjM2Y2OTdjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDkzMzE3NiwiZXhwIjoxNjY3NTI1MTc2fQ.05fuas2W_8oYcuFA_aO14yXHJpXUSb2ZoxaLo-mUBKE";

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("users/stats", {
          headers: {
            token: `${token}`,
          },
        });

        setUserStats(res.data);
        const statList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { mame: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="ユーザー分析" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
