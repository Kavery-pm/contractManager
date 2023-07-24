const API_URL = "https://frontend-application-project-1fa1e7369f1e.herokuapp.com/";
export const fetchAllContracts = async () => {
    try {
        const response = await fetch(`${API_URL}contracts`);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error("Error fetching contracts: " + error.message);
      }
}