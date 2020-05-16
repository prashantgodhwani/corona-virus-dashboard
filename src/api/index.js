import axios from 'axios';
import _ from 'underscore';
 import * as rax from 'retry-axios';

const url = "https://corona-virus-world-and-india-data.p.rapidapi.com/";
const x_rapidapi_host = "corona-virus-world-and-india-data.p.rapidapi.com";
const x_rapidapi_key = process.env.REACT_APP_RAPIDAPI_KEY;
const statsURI = "api";
const timelineURI = "api_india_timeline";
 const interceptorId = rax.attach();

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
    }  = await axios({
      url: url + timelineURI,
      headers: {
        "x-rapidapi-host": x_rapidapi_host,
        "x-rapidapi-key": x_rapidapi_key
      },
      raxConfig: {
        // Retry 3 times on requests that return a response (500, etc) before giving up.  Defaults to 3.
        retry: 10,
     
        // Retry twice on errors that don't return a response (ENOTFOUND, ETIMEDOUT, etc).
        noResponseRetries: 2,
     
        // Milliseconds to delay at first.  Defaults to 100.
        retryDelay: 3000,
     
        // You can set the backoff type.
        // options are 'exponential' (default), 'static' or 'linear'
        backoffType: 'exponential',
     
        // You can detect when a retry is happening, and figure out how many
        // retry attempts have been made
        onRetryAttempt: err => {
          const cfg = rax.getConfig(err);
          console.log(`Retry attempt fetchTimelineStats #${cfg.currentRetryAttempt}`);
        }
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

export {
  fetchWorldStats,
  fetchCountryStats,
  fetchTimelineStats,
  fetchZoneStats,
  fetchDistrictStats
};