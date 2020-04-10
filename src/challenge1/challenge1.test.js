import {
  impactCurrentlyInfectedPeople,
  severeImpactCurrentlyInfectedPeople,
  calculateInfectionsByRequestedTime,
  getPeriod,
  getFactor
} from './challenge1';

describe('Challenge 1 tests', () => {
  describe('Test CurrentlyInfected', () => {
    const input = 674;
    test('Testing impactCurrentlyInfectedPeople to return 10x input', () => {
      const output = { currentlyInfected: input * 10 };
      expect.assertions(1);
      expect(impactCurrentlyInfectedPeople(input)).toEqual(output);
    });
    test('Testing severeImpactCurrentlyInfectedPeople to return 50x input', () => {
      const output = { currentlyInfected: input * 50 };
      expect.assertions(1);
      expect(severeImpactCurrentlyInfectedPeople(input)).toEqual(output);
    });
  });

  describe('Test infectionsByRequestedTime for period in days', () => {
    const input = 674;
    const time = 28;
    const period = 'days';
    const factor = Math.floor(time / 3);
    test('Testing impact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = impactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
    test('Testing severeImpact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = severeImpactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
  });

  describe('Test infectionsByRequestedTime for period in weeks', () => {
    const input = 674;
    const time = 2;
    const period = 'weeks';
    const factor = Math.floor((time * 7) / 3);
    test('Testing impact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = impactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
    test('Testing severeImpact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = severeImpactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
  });

  describe('Test infectionsByRequestedTime for period in months', () => {
    const input = 674;
    const time = 1;
    const period = 'months';
    const factor = Math.floor((time * 30) / 3);
    test('Testing impact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = impactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
    test('Testing severeImpact infectionsByRequestedTime to return currentlyInfected * (2 ^ factor)', () => {
      const { currentlyInfected } = severeImpactCurrentlyInfectedPeople(input);
      const output = { infectionsByRequestedTime: currentlyInfected * (2 ** factor) };
      expect.assertions(1);
      expect(calculateInfectionsByRequestedTime(currentlyInfected, period, time)).toEqual(output);
    });
  });

  describe('Test getPeriod', () => {
    test('expect to return 1 when input is days', () => {
      expect.assertions(1);
      expect(getPeriod('days')).toEqual(1);
    });
    test('expect to return 7 when input is weeks', () => {
      expect.assertions(1);
      expect(getPeriod('weeks')).toEqual(7);
    });
    test('expect to return 30 when input is months', () => {
      expect.assertions(1);
      expect(getPeriod('months')).toEqual(30);
    });
  });

  describe('Test getFactor', () => {
    test('expect to return factor', () => {
      const output = 2 ** 10;
      expect.assertions(1);
      expect(getFactor('months', 1)).toEqual(output);
    });
  });
});
