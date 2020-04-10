import { getPeriod } from './challenge1';

export const calculateCasesForICUByRequestedTime = (infectionsByRequestedTime) => ({
  casesForICUByRequestedTime: Math.floor((infectionsByRequestedTime * 5) / 100)
});

export const calculateCasesForVentilatorsByRequestedTime = (infectionsByRequestedTime) => ({
  casesForVentilatorsByRequestedTime: Math.floor((infectionsByRequestedTime * 2) / 100)
});

export const calculateDollarsInFlight = (
  avgDailyIncomeInUSD, avgDailyIncomePopulation,
  infectionsByRequestedTime, periodType, timeToElapse
) => {
  const period = getPeriod(periodType) * timeToElapse;
  const dollarsInFlight = Math.floor((infectionsByRequestedTime * avgDailyIncomePopulation
  * avgDailyIncomeInUSD) / period);
  return { dollarsInFlight };
};
