import axios from 'axios';
import axiosRetry from 'axios-retry';
import _ from 'underscore';

const url = "https://corona-virus-world-and-india-data.p.rapidapi.com/";
const x_rapidapi_host = "corona-virus-world-and-india-data.p.rapidapi.com";
const x_rapidapi_key = "9920ec77e7msh522fd440cd03f5fp18cf83jsn5a79de020a2a";
const statsURI = "api";
const timelineURI = "api_india_timeline";

axiosRetry(axios, {
  retries: 3
});

const fetchWorldStats = async () => {
  try {
    const {
      data
    } = await axios.get(url + statsURI, {
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
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetchTimelineStats = async () => {
  try {
    const {
      data
    } = await axios.get(url + timelineURI, {
      headers: {
        "x-rapidapi-host": x_rapidapi_host,
        "x-rapidapi-key": x_rapidapi_key
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}


const fetchZoneStats = async () => {
  try {
    const {
      data
    } = await axios.get("https://v1.api.covindia.com/zone-data");
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetchDistrictStats = async () => {
  try {
    const {
      data
    } = await axios.get("https://api.covid19india.org/state_district_wise.json");
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetchDistricts = async (query) => {
  try {
    const {
      data
    } = await axios.get("https://indian-cities-api-nocbegfhqg.now.sh/cities?City_like=" + query);

    const stateData = await axios.get("https://indian-cities-api-nocbegfhqg.now.sh/cities?State_like=" + query);
    
    return _.union(data, stateData.data);
  } catch (error) {
    console.log(error);
  }
}


export {
  fetchWorldStats,
  fetchCountryStats,
  fetchTimelineStats,
  fetchZoneStats,
  fetchDistrictStats,
  fetchDistricts
};