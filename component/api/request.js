
// export const random_users = async (page) => {
//     try {
//       const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
//       if (response.ok) {
//         const responseData = await response.json();
//         return responseData;
//       } else {
//         console.warn("Request failed with status:", response.status);
//         return null;
//       }
//     } catch (error) {
//       console.warn(error);
//       return null;
//     }
//   };
export const random_users = async (page) => {
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`); // Replace with actual API URL
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return null;
    }
  };
  
  export const getJobDetails = async (id) => {
    try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs/${id}`); // Correct URL format
        if (!response.ok) throw new Error(`Failed to fetch job details: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching job details:", error);
        return null;
    }
};
