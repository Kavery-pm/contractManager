
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getCategories } from "../services/getCategories";

const NewContract = () => {
  const [categories, setCategories] = useState([]);
  const [contractData, setContractData] = useState({
    firstName: "",
    lastName: "",
    category: "",
    status: "Draft",
    email: "",
    startDate: "",
    cancelationDate: "",
  });

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategoriesData();
  }, []);

  const handleChange = (e) => {
   const { name, value } = e.target;
    setContractData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContractData({
      firstName: "",
      lastName: "",
      category: "",
      status: "Draft",
      email: "",
      startDate: "",
      cancelationDate: "",
    });
    console.log("New Contract Data:", contractData);
  };

 
  const selectedCategory = categories.find(
    (category) => category.id === parseInt(contractData.category)
  );

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Grid container spacing={6}>
         
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={contractData.category}
                onChange={handleChange}
                label="Category"
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
     

          
          {selectedCategory?.visibleFields?.map((field) => (
              <Grid item xs={12} md={6} key={field}>
                <FormControl variant="outlined" fullWidth>
                  <TextField
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={contractData[field]}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </FormControl>
              </Grid>
            ))}
           

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Contract
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default NewContract;
