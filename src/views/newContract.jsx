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
import { createNewcontract } from "../services/createContract";

const NewContract = () => {
  const [categories, setCategories] = useState([]);
  const [contractData, setContractData] = useState({
    firstName: "",
    lastName: "",
    category: "",
    status: "Draft",
    email: "",
    startDate: null,
    cancelationDate: null
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

 

  const formatDateForInput = (date) => {
    if (!date) return ""; 

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    let correctedName = name;
    if (name === "cancellationDate") {
      correctedName = "cancelationDate"; 
    } else if (name === "startDate") {
      correctedName = "startDate";
    }
  
    let fieldValue;
    if (correctedName === "cancelationDate" || correctedName === "startDate") {
      fieldValue = value ? new Date(value) : null;
    } else {
      fieldValue = value;
    }
  
    setContractData((prevData) => ({ ...prevData, [correctedName]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if startDate, cancelationDate, and email are provided
    const { startDate, cancelationDate, email, ...restData } = contractData;

    const requestData = {
      ...restData,
      email: email || "",
    };
    if (startDate !== null) {
      requestData.startDate = startDate.toISOString().slice(0, 10);
    }
    if (cancelationDate !== null) {
      requestData.cancelationDate = cancelationDate.toISOString().slice(0, 10);
    }
    try {
      const createdContract = await createNewcontract(requestData);
      console.log(createdContract);

      setContractData({
        firstName: "",
        lastName: "",
        category: "",
        status: "Draft",
        email: "",
        startDate: null, 
        cancelationDate: null, 
      });
    } catch (error) {
      console.error("Error creating a new contract", error.message);
    }
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
                {field === "status" ? (
                  <>
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
                  </>
                ) : (
                  <TextField
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={
                    
                      field === "cancellationDate" || field === "startDate"
                        ? (contractData[field] ? formatDateForInput(contractData[field]) : null)
                        : contractData[field]
                    }
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    type={field === "cancellationDate" || field === "startDate" ? "date" : "text"}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
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
