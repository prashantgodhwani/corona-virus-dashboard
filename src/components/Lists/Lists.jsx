import React from 'react';

const Lists = () => {
  return (
    <div className="container-fluid">
    <div class="row">
      <div class="col-lg-6 box-margin">
        <div class="card code-table">
          <div class="card-body pb-0">
            <div class="card-header border-none bg-transparent d-flex align-items-center justify-content-between p-0 mb-30">
              <div class="widgets-card-title">
                <h5 class="card-title mb-0">Most Affected Countries</h5>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-hover table-nowrap">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Today Cases</th>
                    <th>Recovered</th>
                    <th>Today Deaths</th>
                    <th>Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/5.png" alt="" /><span>USA</span>
                    </td>
                    <td>
                      108,161
                    </td>
                    <td>
                      2,48,538
                    </td>
                    <td>
                      18,538
                    </td>
                    <td>
                      78,538
                    </td>
                    <td>
                      1,14722
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/6.png" alt=""/><span>Italy</span>
                    </td>
                    <td>
                      72,161
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      8,722
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/7.png" alt=""/><span>China</span>
                    </td>
                    <td>
                      12,4161
                    </td>
                    <td>
                      7,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,722
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/8.png" alt=""/><span>Spain</span>
                    </td>
                    <td>
                      108,161
                    </td>
                    <td>
                      1,2538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      4,722
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/9.png" alt=""/><span>Germa</span>
                    </td>
                    <td>
                      7,161
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      8,538
                    </td>
                    <td>
                      2,722
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img class="chat-img mr-2" src="img/bg-img/10.jpg" alt=""/><span>Iran</span>
                    </td>
                    <td>
                      8,161
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      9,538
                    </td>
                    <td>
                      8,538
                    </td>
                    <td>
                      2,722
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 box-margin height-card">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="single-news-card mb-30">
                  <h5>Concerns over reuse of protective medical kit</h5>
                  <div class="single-card-content d-sm-flex align-items-center">
                    <div class="image-area mb-20-xs">
                      <img src="img/bg-img/15.jpg" alt=""/>
                    </div>
                    <div class="content-text">
                      <p>One union official says a change in guidance could see front-line medics withdraw from duties. Consectetur adipisicing elit. Cumque perspiciatis soluta minima.</p>
                      <a href="news-details.html" target="_blank">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Lists;
