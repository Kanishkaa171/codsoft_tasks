const API_BASE_URL = "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// AUTH

export const signupUser = (userData) =>
  request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
  });

export const loginUser = (credentials) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

// JOBS

export const getJobs = (params = {}) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {
      searchParams.append(key, value);
    }
  });

  const query = searchParams.toString();

  return request(`/jobs${query ? `?${query}` : ""}`);
};

export const getJobById = (jobId) =>
  request(`/jobs/${jobId}`);

// APPLICATIONS

export const applyToJob = (
  jobId,
  formData
) => {
  const token =
    localStorage.getItem(
      "jobly_token"
    );

  return request(
    `/applications/${jobId}`,
    {
      method: "POST",

      headers: {
        Authorization:
          `Bearer ${token}`,
      },

      body: formData,
    }
  );
};

export const getCandidateApplications = async () => {
  const token = localStorage.getItem("jobly_token");

  const data = await request("/applications/candidate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getEmployerApplications = async () => {
  const token = localStorage.getItem("jobly_token");

  return request("/applications/employer", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateApplicationStatus = (
  applicationId,
  status
) => {
  const token = localStorage.getItem("jobly_token");

  return request(
    `/applications/${applicationId}/status`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    }
  );
};

// SAVED JOBS

export const getSavedJobs = async () => {
  const token =
    localStorage.getItem(
      "jobly_token"
    );

  const data = await request(
    "/saved-jobs",
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  return Array.isArray(data)
    ? data
    : data.savedJobs || [];
};

export const saveJob = (jobId) => {
  const token = localStorage.getItem("jobly_token");

  return request(`/saved-jobs/${jobId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeSavedJob = (jobId) => {
  const token = localStorage.getItem("jobly_token");

  return request(`/saved-jobs/${jobId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// JOB ALERTS

export const getJobAlerts = () => {
  const token = localStorage.getItem("jobly_token");

  return request("/job-alerts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createJobAlert = (alertData) => {
  const token = localStorage.getItem("jobly_token");

  return request("/job-alerts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(alertData),
  });
};

export const toggleJobAlert = (alertId) => {
  const token = localStorage.getItem("jobly_token");

  return request(`/job-alerts/${alertId}/toggle`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteJobAlert = (alertId) => {
  const token = localStorage.getItem("jobly_token");

  return request(`/job-alerts/${alertId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// NOTIFICATIONS

export const getNotifications = () => {
  const token = localStorage.getItem("jobly_token");

  return request("/notifications", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const markNotificationAsRead = (
  notificationId
) => {
  const token = localStorage.getItem("jobly_token");

  return request(
    `/notifications/${notificationId}/read`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const markAllNotificationsAsRead = () => {
  const token = localStorage.getItem("jobly_token");

  return request("/notifications/read-all", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteNotification = (notificationId) => {
  const token = localStorage.getItem("jobly_token");

  return request(`/notifications/${notificationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// DASHBOARDS

export const getCandidateDashboard = () => {
  const token = localStorage.getItem("jobly_token");

  return request("/dashboard/candidate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getEmployerDashboard = () => {
  const token = localStorage.getItem("jobly_token");

  return request("/dashboard/employer", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};