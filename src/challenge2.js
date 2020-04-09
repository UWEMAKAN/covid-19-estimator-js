export const calculateSevereCasesByRequestedTime = (infectionsByRequestedTime) => {
  const severeCasesByRequestedTime = Math.floor((infectionsByRequestedTime * 15) / 100);
  return { severeCasesByRequestedTime };
};

export const calculateHospitalBedsByRequestedTime = (
  totalHospitalBeds, severeCasesByRequestedTime
) => {
  const hospitalBedsByRequestedTime = Math.floor(
    ((totalHospitalBeds * 35) / 100) - severeCasesByRequestedTime
  );
  return { hospitalBedsByRequestedTime };
};
