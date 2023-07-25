import { useState,useEffect } from "react";
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
    const [categories, setcategories] = useState([])
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
          setcategories(categoriesData);
        } catch (error) {
          console.error("Error fetching categories:", error.message);
        }
      };
  
      fetchCategoriesData();
}, [])

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

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={contractData.firstName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={contractData.lastName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={contractData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
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
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={contractData.status}
                onChange={handleChange}
                label="Status"
              >
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
              </Select>
            </FormControl>
          </Grid>
         

          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="start-date">Start Date</InputLabel>
              <TextField
                id="start-date"
                type="date"
                name="startDate"
                value={contractData.startDate}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    paddingTop: "12px", 
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="cancellation-date">Cancellation Date</InputLabel>
              <TextField
                id="cancellation-date"
                type="date"
                name="cancelationDate"
                value={contractData.cancelationDate}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    paddingTop: "12px",
                    marginTop:'34px' 
                  },
                }}
              />
            </FormControl>
          </Grid>

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
