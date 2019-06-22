<template>
  <div class="jb_content">

    <div class="container">
      <div class="searchbar">
        <form class="searchbarForm" action="http://www.jobleadchina.com/job" method="GET">
          <div class="searchbarWapper">
            <div class="searchbarCitySelect">
              <label class="industryinputlabel" for="work_city">
                <select class="cityselect" name="work_city" id="work_city">
                  <option selected disabled>City</option>
                  <option value="Shenzhen">Shenzhen</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Shanghai">Shanghai</option>
                  <option value="Guangzhou">Guangzhou</option>
                  <option value="Chengdu">Chengdu</option>
                  <option value="Hangzhou">Hangzhou</option>
                  <option value="Nanjing">Nanjing</option>
                  <option value="Xi&#39;an">Xi'an</option>
                  <option value="Haikou">Haikou</option>
                  <option value="Tianjin">Tianjin</option>
                  <option value="Wuhan">Wuhan</option>
                  <option value="Chongqing">Chongqing</option>
                  <option value="Kunming">Kunming</option>
                  <option value="Shenyang">Shenyang</option>
                  <option value="Dongguan">Dongguan</option>
                  <option value="Ningbo">Ningbo</option>
                  <option value="Zhuhai">Zhuhai</option>
                  <option value="Dalian">Dalian</option>
                  <option value="Qingdao">Qingdao</option>
                  <option value="Hongkong">Hongkong</option>
                  <option value="Macao">Macao</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Others">Others</option>
                  <option value>All</option>
                </select>
              </label>
            </div>

            <div class="searchbarJobTypeSelect">
              <label class="industryinputlabel" for="job_status_type">
                <select class="jobtypeselect" name="job_status_type" id="job_status_type">
                  <option selected disabled>Job Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                  <option value>All</option>
                </select>
              </label>
            </div>

            <div class="searchbarIndustrySelect">
              <div class="industrywarpper">
                <div class="industryCell">
                  <label class="industryinputlabel" for="job_industry">
                    <!--<span class="inputplaceholderlabel">Industry</span>-->
                    <input
                      type="text"
                      class="industryInput input-large"
                      name="job_industry"
                      id="job_industry"
                      value
                      placeholder="Industry"
                      autocomplete="off"
                      readonly
                    >
                    <!--<span class="caret"></span>-->
                  </label>
                </div>

                <div class="industrylist">
                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Sales/Marketing</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Sales/Retail</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Marketing</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Advertisement</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">PR</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Customer Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Education/Training</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Teaching</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Translation/Proofreading</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Other Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Creative</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Graphic Design</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Photographer</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Artwork Designer</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Trade/Logistic</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Sourcing/Purchasing</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">International Trade</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Logistic</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Manufacture</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Architecture</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Manufacturing/Production</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Engineer</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Finance/Consultancy</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Finance</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Accounting</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Banking</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Consultancy</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Legal</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">IT</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Software Engineer</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Data Analyst</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Product Designer</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Admin</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Professional Manager</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Secretarial/Office manager</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Human Resource</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Entertainment/Catering</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Acting/Model/Voice</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Bar/Club/Restaurant Staff</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Hotel/tourism</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Healthcare</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Physician Job</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Medical assistant job</a>
                        </li>
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Biomedical Engineer Job</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="industrylist_row">
                    <strong class="industrylist_row_name">Others</strong>
                    <div class="industrylist_row_content">
                      <ul class="industrylist_row_1">
                        <li>
                          <a href="http://www.jobleadchina.com/job#">Others</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="searchbarSalarySelect">
              <label class="industryinputlabel" for="salary_range">
                <select
                  class="salaryselect"
                  name="salary_range"
                  id="salary_range"
                  title="Salary Range"
                >
                  <option selected disabled>Salary Range</option>
                  <option value="1">Under 8K/MTH</option>
                  <option value="2">8K-10KMTH</option>
                  <option value="3">10K-15K/MTH</option>
                  <option value="4">15K-20K/MTH</option>
                  <option value="5">20K-30K/MTK</option>
                  <option value="6">30K-50K/MTH</option>
                  <option value="7">Above 50K/MTH</option>
                  <option value>All</option>
                </select>
              </label>
            </div>

            <div class="searchbarCompanyNameInput">
              <div class="industryCell">
                <label class="companyNameInputLabel" for="company_name">
                  <input
                    type="text"
                    class="companyNameInput input-large"
                    name="company_name"
                    id="company_name"
                    value
                    placeholder="Company name"
                    autocomplete="off"
                  >
                </label>
              </div>
            </div>
          </div>
          <div class="searchbarSearchButton">
            <button class="btn-searchbar searchbarButton" type="submit">Search</button>
          </div>
        </form>
      </div>
      <div id="jobs" class="joblist">
        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar.png"
                title="LXBIRD"
                alt="LXBIRD Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a
                  href="http://www.jobleadchina.com/job/4165"
                >IELTS Speaking Teacher（Part-time）-Based in Shenzhe</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">7K/MTH - 10K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Any education</span>
              <span class="seperate-line"></span>
              <span>Experience: Mid-Senior Level</span>
              <span class="seperate-line"></span>
              <span>Part-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"IELTS Speaking"</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4165">LXBIRD</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Teaching Center</span>
              <span class="seperate-line"></span>
              <span>Shenzhen</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/logo_holder.png"
                title="租租车 ZUZUCHE.COM"
                alt="租租车 ZUZUCHE.COM Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a
                  href="http://www.jobleadchina.com/job/4217"
                >German/Portuguese/Italian Marketing&amp;Operations Spe</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">10K/MTH - 20K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Bachelor</span>
              <span class="seperate-line"></span>
              <span>Experience: Associate</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">
                ""Must native speaker, and fluent in English,familiar with
                Native market,Can Speak Chinese is preferred."
              </p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4217">租租车 ZUZUCHE.COM</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>E-Commerce</span>
              <span class="seperate-line"></span>
              <span>Guangzhou</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar.jpg"
                title="YaDa Hospital"
                alt="YaDa Hospital Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a
                  href="http://www.jobleadchina.com/job/1945"
                >Neurology / Rehabilitaion Physician/Therapist</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">30K/MTH - 100K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Dr.</span>
              <span class="seperate-line"></span>
              <span>Experience: Executive</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"Can Speak Fluent English"</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/1945">YaDa Hospital</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Health Care</span>
              <span class="seperate-line"></span>
              <span>Others</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/logo_holder.png"
                title="H.E."
                alt="H.E. Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/4216">ESL teachers</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">13K/MTH - 14K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Bachelor</span>
              <span class="seperate-line"></span>
              <span>Experience: Entry Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"Must be North Americans who are native English speakers"</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4216">H.E.</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Teaching Center</span>
              <span class="seperate-line"></span>
              <span>Others</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/logo_holder.png"
                title="Beijing Bytedance Technology Co., Ltd"
                alt="Beijing Bytedance Technology Co., Ltd Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/4215">Language Manager-Global Monetization</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">20K/MTH - 35K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Bachelor</span>
              <span class="seperate-line"></span>
              <span>Experience: Mid-Senior Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint"></div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4215">Beijing Bytedance Technology Co., Ltd</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Software</span>
              <span class="seperate-line"></span>
              <span>Beijing</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar(1).jpg"
                title="ESL recruiting team"
                alt="ESL recruiting team Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/1228">Teaching and travelling in China</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">20K/MTH - 25K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Any education</span>
              <span class="seperate-line"></span>
              <span>Experience: Entry Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">
                "Must native English speaker and from native English
                speaking countries"
              </p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/1228">ESL recruiting team</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Teaching Center</span>
              <span class="seperate-line"></span>
              <span>Shanghai</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar(2).jpg"
                title="Sara"
                alt="Sara Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a
                  href="http://www.jobleadchina.com/job/4214"
                >Urgently Need Native English Teacher in Guangzhou</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">10000K/MTH - 20000K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Bachelor</span>
              <span class="seperate-line"></span>
              <span>Experience: Mid-Senior Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"fluent oral english and excellent teaching "</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4214">Sara</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Teaching Center</span>
              <span class="seperate-line"></span>
              <span>Guangzhou</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar(3).png"
                title="IS Group"
                alt="IS Group Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/2442">Project Manager</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">10K/MTH - 30K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Any education</span>
              <span class="seperate-line"></span>
              <span>Experience: Mid-Senior Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"Fluent English and Chinese"</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/2442">IS Group</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Convention and Exhibition/Ad/PR</span>
              <span class="seperate-line"></span>
              <span>Shanghai</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar(3).png"
                title="IS Group"
                alt="IS Group Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/415">Marketing Manager</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">10K/MTH - 15K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Any education</span>
              <span class="seperate-line"></span>
              <span>Experience: Executive</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint"></div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/415">IS Group</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Convention and Exhibition/Ad/PR</span>
              <span class="seperate-line"></span>
              <span>Shanghai</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 18, 2019</span>
            </div>
          </div>
        </div>

        <div class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                src="../../assets/img/joblist/company_logo_avatar(2).jpg"
                title="Sara"
                alt="Sara Company logo"
              >
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a
                  href="http://www.jobleadchina.com/job/4209"
                >20k Native English Teacher Needed Fexible Time +Pr</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">10000K/MTH - 20000K/MTH</h3>
            </div>
            <div class="jobThumbnailPositionRequire">
              <span>Bachelor</span>
              <span class="seperate-line"></span>
              <span>Experience: Mid-Senior Level</span>
              <span class="seperate-line"></span>
              <span>Full-time</span>
            </div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"fluent oral english and excellent teaching "</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4209">Sara</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>Teaching Center</span>
              <span class="seperate-line"></span>
              <span>Guangzhou</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">Post time: June 17, 2019</span>
            </div>
          </div>
        </div>
      </div>

      <div class="loadMoreBtn-container">
        <form action="http://www.jobleadchina.com/job_paginate">
          <div class="form-group">
            <button type="submit" class="loadMore-btn">
              <i class="fa fa-btn fa-user"></i>
              More Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.jumbotron {
  background-image: url(http://www.jobleadchina.com/uploads/index_img.jpg);
  background-attachment: fixed;
  background-position: top center;
  background-repeat: repeat;
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
}
.jb_title {
  color: #fefefe !important;
  margin-left: 80px;
}
.jb_subtitle {
  color: #fefefe !important;
  margin-left: 80px;
  width: 600px;
  padding-top: 10px;
}
</style>
