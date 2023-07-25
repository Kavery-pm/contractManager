const API_URL = "https://frontend-application-project-1fa1e7369f1e.herokuapp.com/";
export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL}categories`);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error("Error fetching categories: " + error.message);
      }
}
