const API_URL = "https://frontend-application-project-1fa1e7369f1e.herokuapp.com/";
export const createNewcontract = async (contractData) => {
  console.log(JSON.stringify (contractData));
    try {
        const response =  await fetch(`${API_URL}contracts`, {
            method: 'POST',
        
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contractData),
        })
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error("Error fetching contracts: " + error.message);
      }
}