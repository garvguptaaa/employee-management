import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/";

// Get All Education Records (or by User ID if necessary)
export const getUserList = async () => {
  try {
    const response = await axios.get(`${API_URL}users/list`); // Assuming this fetches all education records
    return response;
  } catch (error) {
    console.log('error',error.request)
    handleError(error, "Failed to fetch data.");
  }
};

// Utility function to handle errors
const handleError = (error, defaultMessage) => {
  if (error.response) {
    // Server-side error response
    toast.error(error.response.data.message || defaultMessage);
    throw new Error(error.response.data.message || defaultMessage);
  } else if (error.request) {
    // Request was made but no response received
    toast.error("No response from the server.");
    throw new Error("No response from the server.");
  } else {
    // Something else went wrong
    toast.error(error.message);
    throw new Error(error.message);
  }
};