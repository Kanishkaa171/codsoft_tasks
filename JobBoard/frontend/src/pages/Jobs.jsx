import {
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getJobs } from "../services/api.js";
import Footer from "../components/Footer.jsx";

function Jobs() {
  const [searchParams] = useSearchParams();

  const categorySearch =
    searchParams.get("category") || "";

  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] =
    useState([]);
  const [selectedWorkLocation, setSelectedWorkLocation] =
    useState([]);

  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const jobsPerPage = 7;

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const params = {
          page: currentPage,
          limit: jobsPerPage,
          search: searchTerm.trim(),
          location: locationSearch.trim(),
          category: categorySearch,
        };

        if (selectedTypes.length === 1) {
          params.type = selectedTypes[0];
        }

        if (selectedExperience.length === 1) {
          params.experience = selectedExperience[0];
        }

        const data = await getJobs(params);

        let receivedJobs = Array.isArray(data.jobs)
          ? data.jobs
          : [];

        if (selectedTypes.length > 1) {
          receivedJobs = receivedJobs.filter((job) =>
            selectedTypes.includes(
              normalizeType(job.type)
            )
          );
        }

        if (selectedExperience.length > 1) {
          receivedJobs = receivedJobs.filter((job) =>
            selectedExperience.includes(job.experience)
          );
        }

        if (selectedWorkLocation.length > 0) {
          receivedJobs = receivedJobs.filter((job) =>
            selectedWorkLocation.includes(
              getWorkLocation(job)
            )
          );
        }

        setJobs(receivedJobs);
        setTotalJobs(Number(data.total) || 0);
        setTotalPages(Number(data.totalPages) || 1);

      } catch (err) {
        console.error(err);

        setError(
          err.message ||
          "Unable to load jobs."
        );
      } finally {
        setLoading(false);
      }
    };

    loadJobs();

  }, [
    currentPage,
    searchTerm,
    locationSearch,
    categorySearch,
    selectedTypes,
    selectedExperience,
    selectedWorkLocation,
  ]);

  const handleFilterChange = (
    value,
    setter
  ) => {
    setter((current) =>
      current.includes(value)
        ? current.filter(
            (item) => item !== value
          )
        : [...current, value]
    );

    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const startIndex =
    totalJobs === 0
      ? 0
      : (currentPage - 1) * jobsPerPage;

  const showingFrom =
    totalJobs === 0
      ? 0
      : startIndex + 1;

  const showingTo =
    totalJobs === 0
      ? 0
      : Math.min(
          startIndex + jobs.length,
          totalJobs
        );

  return (
    <>
      <div className="jobs-page">

        <section className="jobs-header">

          <p className="section-label">
            EXPLORE OPPORTUNITIES
          </p>

          <h1>
            Find your next job.
          </h1>

          <p>
            Discover opportunities from
            companies looking for talented
            people like you.
          </p>

        </section>

        <section className="jobs-container">

          <div className="jobs-search">

            <div className="jobs-search-field">

              <Search size={19} />

              <input
                type="text"
                placeholder="Job title, skill or company"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(
                    e.target.value
                  );
                  setCurrentPage(1);
                }}
              />

            </div>

            <div className="jobs-search-field location-field">

              <MapPin size={19} />

              <input
                type="text"
                placeholder="Location or remote"
                value={locationSearch}
                onChange={(e) => {
                  setLocationSearch(
                    e.target.value
                  );
                  setCurrentPage(1);
                }}
              />

            </div>

            <button
              className="jobs-search-button"
              onClick={() =>
                setCurrentPage(1)
              }
            >
              Search Jobs
            </button>

          </div>


          <div className="jobs-main">

            <aside className="jobs-filters">

              <div className="filter-heading">

                <h3>
                  Filters
                </h3>

                <SlidersHorizontal
                  size={17}
                />

              </div>


              <div className="filter-group">

                <p>
                  Job Type
                </p>

                <Filter
                  label="Full Time"
                  value="Full Time"
                  values={selectedTypes}
                  setter={setSelectedTypes}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="Internship"
                  value="Internship"
                  values={selectedTypes}
                  setter={setSelectedTypes}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="Part Time"
                  value="Part Time"
                  values={selectedTypes}
                  setter={setSelectedTypes}
                  onChange={handleFilterChange}
                />

              </div>


              <div className="filter-group">

                <p>
                  Experience
                </p>

                <Filter
                  label="Entry Level"
                  value="Entry Level"
                  values={selectedExperience}
                  setter={setSelectedExperience}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="1–3 Years"
                  value="1–3 Years"
                  values={selectedExperience}
                  setter={setSelectedExperience}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="3+ Years"
                  value="3+ Years"
                  values={selectedExperience}
                  setter={setSelectedExperience}
                  onChange={handleFilterChange}
                />

              </div>


              <div className="filter-group">

                <p>
                  Work Location
                </p>

                <Filter
                  label="On-site"
                  value="On-site"
                  values={selectedWorkLocation}
                  setter={setSelectedWorkLocation}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="Hybrid"
                  value="Hybrid"
                  values={selectedWorkLocation}
                  setter={setSelectedWorkLocation}
                  onChange={handleFilterChange}
                />

                <Filter
                  label="Remote"
                  value="Remote"
                  values={selectedWorkLocation}
                  setter={setSelectedWorkLocation}
                  onChange={handleFilterChange}
                />

              </div>

            </aside>


            <div className="jobs-results">

              <div className="jobs-results-top">

                <div>

                  <h2>
                    Latest opportunities
                  </h2>

                  <p>
                    Showing{" "}
                    <strong>
                      {showingFrom}–
                      {showingTo}
                    </strong>{" "}
                    of{" "}
                    <strong>
                      {totalJobs}
                    </strong>{" "}
                    available positions
                  </p>

                </div>

                <select defaultValue="latest">
                  <option value="latest">
                    Most Recent
                  </option>

                  <option value="relevant">
                    Most Relevant
                  </option>

                  <option value="salary">
                    Highest Salary
                  </option>
                </select>

              </div>


              {loading && (
                <div className="jobs-loading">
                  Loading opportunities...
                </div>
              )}


              {!loading && error && (
                <div className="jobs-error">
                  {error}
                </div>
              )}


              {!loading &&
                !error &&
                jobs.length === 0 && (
                  <div className="jobs-empty">

                    <h3>
                      No jobs found
                    </h3>

                    <p>
                      Try changing your
                      search or filters.
                    </p>

                  </div>
                )}


              {!loading &&
                !error &&
                jobs.length > 0 && (

                  <div className="job-list">

                    {jobs.map((job) => (

                      <div
                        className="professional-job-card"
                        key={job.id}
                      >

                        <div className="job-company-logo">
                          {getInitials(
                            job.company_name
                          )}
                        </div>


                        <div className="professional-job-main">

                          <div className="professional-job-top">

                            <span className="job-tag">
                              {normalizeType(
                                job.type
                              ).toUpperCase()}
                            </span>

                            <span className="job-posted">
                              {formatPosted(
                                job.posted_at
                              )}
                            </span>

                          </div>


                          <h3>
                            {job.title}
                          </h3>

                          <p className="professional-company">
                            {job.company_name}
                          </p>


                          <div className="professional-job-meta">

                            <span>
                              <MapPin size={14} />
                              {job.location}
                            </span>

                            <span>
                              <Briefcase size={14} />
                              {job.experience ||
                                "Not specified"}
                            </span>

                            <span>
                              <Clock size={14} />
                              {normalizeType(
                                job.type
                              )}
                            </span>

                          </div>

                        </div>


                        <div className="professional-job-side">

                          <button
                            className="bookmark-btn"
                            type="button"
                          >
                            <Bookmark
                              size={17}
                            />
                          </button>

                          <strong>
                            {job.salary ||
                              "Salary not specified"}
                          </strong>

                          <Link
                            to={`/jobs/${job.id}`}
                          >
                            <button className="view-job-btn">
                              View Job →
                            </button>
                          </Link>

                        </div>

                      </div>

                    ))}

                  </div>

                )}


              {!loading &&
                !error &&
                totalJobs > 0 && (

                  <div className="jobs-pagination">

                    <button
                      onClick={() =>
                        goToPage(
                          currentPage - 1
                        )
                      }
                      disabled={
                        currentPage === 1
                      }
                    >
                      ←
                    </button>


                    {Array.from(
                      {
                        length: totalPages,
                      },
                      (_, index) =>
                        index + 1
                    ).map((page) => (

                      <button
                        key={page}
                        className={
                          currentPage === page
                            ? "pagination-active"
                            : ""
                        }
                        onClick={() =>
                          goToPage(page)
                        }
                      >
                        {page}
                      </button>

                    ))}


                    <button
                      className="pagination-next"
                      onClick={() =>
                        goToPage(
                          currentPage + 1
                        )
                      }
                      disabled={
                        currentPage ===
                        totalPages
                      }
                    >
                      Next →
                    </button>

                  </div>

                )}

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}


function Filter({
  label,
  value,
  values,
  setter,
  onChange,
}) {
  return (
    <label>

      <input
        type="checkbox"
        checked={values.includes(value)}
        onChange={() =>
          onChange(value, setter)
        }
      />

      <span>
        {label}
      </span>

    </label>
  );
}


function normalizeType(type = "") {
  return type
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}


function getWorkLocation(job) {
  const location =
    (job.location || "").toLowerCase();

  if (
    location.includes("remote")
  ) {
    return "Remote";
  }

  if (
    location.includes("hybrid")
  ) {
    return "Hybrid";
  }

  return "On-site";
}


function getInitials(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "JL";
  }

  if (words.length === 1) {
    return words[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return (
    words[0][0] +
    words[1][0]
  ).toUpperCase();
}


function formatPosted(date) {
  if (!date) {
    return "Recently posted";
  }

  const postedDate =
    new Date(date);

  if (
    Number.isNaN(
      postedDate.getTime()
    )
  ) {
    return "Recently posted";
  }

  const difference =
    Date.now() -
    postedDate.getTime();

  const days = Math.floor(
    difference /
      (1000 * 60 * 60 * 24)
  );

  if (days <= 0) {
    return "Today";
  }

  if (days === 1) {
    return "1 day ago";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  if (days < 14) {
    return "1 week ago";
  }

  return `${Math.floor(
    days / 7
  )} weeks ago`;
}


export default Jobs;