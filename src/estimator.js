import {
  impactCurrentlyInfectedPeople,
  severeImpactCurrentlyInfectedPeople,
  calculateInfectionsByRequestedTime
} from './challenge1/challenge1';
import {
  calculateSevereCasesByRequestedTime,
  calculateHospitalBedsByRequestedTime
} from './challenge2/challenge2';
import {
  calculateCasesForICUByRequestedTime,
  calculateCasesForVentilatorsByRequestedTime,
  calculateDollarsInFlight
} from './challenge3/challenge3';

const covid19ImpactEstimator = (data) => {
  // challenge 1
  const {
    reportedCases, periodType, timeToElapse, region, totalHospitalBeds
  } = data;
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;

  let impact = { ...impactCurrentlyInfectedPeople(reportedCases) };
  let severeImpact = { ...severeImpactCurrentlyInfectedPeople(reportedCases) };

  impact = {
    ...impact,
    ...calculateInfectionsByRequestedTime(impact.currentlyInfected, periodType, timeToElapse)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateInfectionsByRequestedTime(severeImpact.currentlyInfected, periodType, timeToElapse)
  };

  // challenge 2
  impact = {
    ...impact,
    ...calculateSevereCasesByRequestedTime(impact.infectionsByRequestedTime)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateSevereCasesByRequestedTime(severeImpact.infectionsByRequestedTime)
  };

  impact = {
    ...impact,
    ...calculateHospitalBedsByRequestedTime(totalHospitalBeds, impact.severeCasesByRequestedTime)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateHospitalBedsByRequestedTime(
      totalHospitalBeds, severeImpact.severeCasesByRequestedTime
    )
  };

  // challenge 3
  impact = {
    ...impact,
    ...calculateCasesForICUByRequestedTime(impact.infectionsByRequestedTime)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateCasesForICUByRequestedTime(severeImpact.infectionsByRequestedTime)
  };

  impact = {
    ...impact,
    ...calculateCasesForVentilatorsByRequestedTime(impact.infectionsByRequestedTime)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateCasesForVentilatorsByRequestedTime(severeImpact.infectionsByRequestedTime)
  };

  impact = {
    ...impact,
    ...calculateDollarsInFlight(avgDailyIncomeInUSD, avgDailyIncomePopulation,
      impact.infectionsByRequestedTime, periodType, timeToElapse)
  };
  severeImpact = {
    ...severeImpact,
    ...calculateDollarsInFlight(avgDailyIncomeInUSD, avgDailyIncomePopulation,
      severeImpact.infectionsByRequestedTime, periodType, timeToElapse)
  };

  // return
  const returnValue = { data, impact, severeImpact };
  return returnValue;
};

export default covid19ImpactEstimator;
