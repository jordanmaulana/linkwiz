"use client";

import React from "react";
import "chart.js/auto";

import { Line } from "react-chartjs-2";

const convertToHourlyBucket = (date) => {
  const d = new Date(date);
  const hour = d.getHours();

  return `${hour}`;
};

const groupLeadsByHourlyBucket = (leads) => {
  const hourlyBuckets = {};

  leads.forEach((lead) => {
    const bucket = convertToHourlyBucket(lead.date);

    if (!hourlyBuckets[bucket]) {
      hourlyBuckets[bucket] = 0;
    }

    hourlyBuckets[bucket]++;
  });

  return hourlyBuckets;
};

export const Statistics = ({ data }) => {
  const leadsByHourlyBucket = groupLeadsByHourlyBucket(data);

  const defaultData = {};
  for (let i = 0; i < 24; i++) {
    const hour = `${i.toString()}`;
    defaultData[hour] = 0;
  }

  // Merge the original data with default data
  const mergedData = { ...defaultData, ...leadsByHourlyBucket };

  const hoursList = Object.keys(mergedData);
  const valuesList = Object.values(mergedData);

  const example = {
    labels: hoursList,
    datasets: [
      {
        fill: true,
        label: "Total leads per hour",
        data: valuesList,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h1 className="font-bold text-xl my-3">Statistics</h1>
      <Line data={example} width={400} height={100} />
    </div>
  );
};
