import axios from 'axios';

const url = "https://corona-virus-world-and-india-data.p.rapidapi.com/api";
const x_rapidapi_host = "corona-virus-world-and-india-data.p.rapidapi.com";
const x_rapidapi_key = "9920ec77e7msh522fd440cd03f5fp18cf83jsn5a79de020a2a";

const fetchWorldStats = async () => {
  try {
    const {
      data
    } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": x_rapidapi_host,
        "x-rapidapi-key": x_rapidapi_key
      }
    });

    const {
      world_total: {
        active_cases,
        total_cases,
        total_deaths,
        total_recovered,
        total_cases_per_1m_population,
        deaths_per_1m_population,
        serious_critical,
        new_deaths
      }
    } = data;

    const worldTotal = {
      activeCases: active_cases,
      totalDeaths: total_deaths,
      totalCases: total_cases,
      totalRecovered: total_recovered,
      totalCasesInAMil: total_cases_per_1m_population,
      totalDeathsInAMil: deaths_per_1m_population,
      updatedAt: data.statistic_taken_at,
      seriousCritical: serious_critical,
      recentDeaths: new_deaths
    }

    return worldTotal;

  } catch (error) {
    console.log(error);
  }
}

const fetchCountryStats = async () => {
  try {
    const {
      data
    } = await axios.get("https://corona.lmao.ninja/v2/countries");
    console.log(data.sort(compare).slice(0, 10));
    return data;
  } catch (error) {
    console.log(error);
  }
}

const compare = (a, b) => {
  if (a.cases > b.cases) return -1;
  if (b.cases > a.cases) return 1;
  return 0;
}

export {
  fetchWorldStats,
  fetchCountryStats
};