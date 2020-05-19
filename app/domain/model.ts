import swisseph, { CalculationResult } from 'swisseph';
import moment from 'moment';

export type Aspect = 'conjunction' | 'opposition' | 'trine' | 'square';
export type Bodies =
  | 'sun'
  | 'moon'
  | 'mercury'
  | 'venus'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'
  | 'pluto'
  | 'node';

type Result = Record<Bodies, CalculationResult>;

export class Model {
  private studiedPlanets: number[] = [
    swisseph.SE_SUN,
    swisseph.SE_MOON,
    swisseph.SE_MERCURY,
    swisseph.SE_VENUS,
    swisseph.SE_MARS,
    swisseph.SE_JUPITER,
    swisseph.SE_SATURN,
    swisseph.SE_URANUS,
    swisseph.SE_NEPTUNE,
    swisseph.SE_PLUTO,
    swisseph.SE_TRUE_NODE
  ];

  // private orbs: Record<Bodies, number> = {
  //   sun: 0.5,
  //   mars: 0.3,
  //   jupiter: 0.07,
  //   saturn: 0.05,
  //   uranus: 0.03,
  //   neptune: 0.01,
  //   pluto: 0.01,
  //   node: 0.2
  // };

  constructor(private readonly flag: number = swisseph.SEFLG_SPEED) {}

  async calculateImportantDates(from: Date, to: Date) {
    const natalPositions = await this.getPlanetsPositions(from);
    const initialMoment = moment(from);
    const lastMoment = moment(to);
    const differenceInDays = lastMoment.diff(initialMoment, 'day');

    const results = [];

    for (let index = 0; index < differenceInDays; index++) {
      initialMoment.add(1, 'day');

      const importantAnglesOfTheDay = this.findImportantAspectsBetweenNatalPlanetsAndTransitSun(
        natalPositions,
        await this.getPlanetPosition(swisseph.SE_SUN, initialMoment.toDate())
      );

      if (Object.keys(importantAnglesOfTheDay).length > 0) {
        results.push({
          date: initialMoment.toDate(),
          importantAnglesOfTheDay
        });
      }
    }

    return results;
  }

  async getPlanetsPositions(date: Date): Promise<Result> {
    const results = await Promise.all(
      this.studiedPlanets.map(planetCode =>
        this.getPlanetPosition(planetCode, date)
      )
    );

    const [
      sun,
      moon,
      mercury,
      venus,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
      pluto,
      node
    ] = results;

    return {
      sun,
      moon,
      mercury,
      venus,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
      pluto,
      node
    };
  }

  async getPlanetPosition(planetCode: number, date: Date) {
    const julianDate = await this.getJulianDate(date);
    return new Promise<CalculationResult>((resolve, reject) => {
      swisseph.swe_calc_ut(julianDate, planetCode, this.flag, resolve);
    });
  }

  private findImportantAspectsBetweenNatalPlanetsAndTransitSun(
    natalPositions: Result,
    sunPosition: CalculationResult
  ) {
    const result: Record<string, { aspect: Aspect; actualAngle: number }> = {};

    for (const planet in natalPositions) {
      if (natalPositions.hasOwnProperty(planet)) {
        const natalPlanetLongitude = natalPositions[planet].longitude;
        const currentSunLongitude = sunPosition.longitude;

        if (this.isConjunction(natalPlanetLongitude, currentSunLongitude)) {
          result[planet] = {
            aspect: 'conjunction',
            actualAngle: Math.abs(currentSunLongitude - natalPlanetLongitude)
          };

          continue;
        }

        if (this.isOpposition(natalPlanetLongitude, currentSunLongitude)) {
          result[planet] = {
            aspect: 'opposition',
            actualAngle: Math.abs(currentSunLongitude - natalPlanetLongitude)
          };

          continue;
        }

        if (this.isSquare(natalPlanetLongitude, currentSunLongitude)) {
          result[planet] = {
            aspect: 'square',
            actualAngle: Math.abs(currentSunLongitude - natalPlanetLongitude)
          };

          continue;
        }

        if (this.isTrine(natalPlanetLongitude, currentSunLongitude)) {
          result[planet] = {
            aspect: 'trine',
            actualAngle: Math.abs(currentSunLongitude - natalPlanetLongitude)
          };

          continue;
        }
      }
    }

    return result;
  }

  private isConjunction(longitudeA: number, longitudeB: number, orb = 0.5) {
    if (Math.abs(longitudeA - longitudeB) <= orb) {
      return true;
    }

    return false;
  }

  private isOpposition(longitudeA: number, longitudeB: number, orb = 0.5) {
    const min = 180 - orb;
    const max = 180 + orb;
    const diff = Math.abs(longitudeA - longitudeB);

    if (diff >= min && diff <= max) {
      return true;
    }

    return false;
  }

  private isTrine(longitudeA: number, longitudeB: number, orb = 0.5) {
    const min120 = 120 - orb;
    const max120 = 120 + orb;
    const min240 = 240 - orb;
    const max240 = 240 + orb;

    const diff = Math.abs(longitudeA - longitudeB);

    if (diff >= min120 && diff <= max120) {
      return true;
    }

    if (diff >= min240 && diff <= max240) {
      return true;
    }

    return false;
  }

  private isSquare(longitudeA: number, longitudeB: number, orb = 0.5) {
    const min90 = 90 - orb;
    const max90 = 90 + orb;
    const min270 = 270 - orb;
    const max270 = 270 + orb;

    const diff = Math.abs(longitudeA - longitudeB);

    if (diff >= min90 && diff <= max90) {
      return true;
    }

    if (diff >= min270 && diff <= max270) {
      return true;
    }

    return false;
  }

  private getYearMonthDayHour(date: Date | string) {
    const momentInstance = moment(date);

    return {
      year: momentInstance.get('year'),
      month: momentInstance.get('month') + 1,
      day: momentInstance.get('D'),
      hour: momentInstance.get('hour')
    };
  }

  private getJulianDate(date: Date | string) {
    const { year, month, day, hour } = this.getYearMonthDayHour(date);

    return new Promise((resolve, reject) => {
      swisseph.swe_julday(
        year,
        month,
        day,
        hour,
        swisseph.SE_GREG_CAL,
        resolve
      );
    });
  }
}
