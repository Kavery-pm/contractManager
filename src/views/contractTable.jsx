import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import SearchIcon from "@mui/icons-material/Search";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import showContracts from "../assets/showPdf.png";
import ContractDetails from "../components/contractDetails";
import { fetchAllContracts } from "../services/getContracts";

const tableIcons = {
  Search: SearchIcon,
  SortArrow: ArrowDownwardIcon,
  ViewColumn: ViewColumnIcon,
  FirstPage: FirstPageIcon,
  PreviousPage: ChevronLeftIcon,
  NextPage: ChevronRightIcon,
  LastPage: LastPageIcon,
};
const ContractTable = () => {
  const [viewContractDetails, setviewContractDetails] = useState(false);
  const [contractDetails, setcontractDetails] = useState("");
  const [contractData, setcontractData] = useState([]);
  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const contractsData = await fetchAllContracts();
        setcontractData(contractsData);
      } catch (error) {
        console.error("Error fetching contracts", error.message);
      }
    };
    fetchContracts();
  }, []);

  const columns = [
    { title: "Name", field: "firstName" },
    { title: "Surname", field: "lastName" },
    {
      title: "ContractDetails",
      field: "id",
      render: (rowData) => {
        if (rowData.id !== undefined) {
          return (
            <div>
              <span
                style={{ cursor: "pointer" }}
                title="click to view contract details"
              >
                <img
                  src={showContracts}
                  onClick={() => setviewContractDetails(true)}
                />
              </span>
            </div>
          );
        }
      },
    },
    { title: "status", field: "status" },
  ];
  const closeContractHandler = () => {
    setviewContractDetails(false);
  };
  return (
    <>
      {viewContractDetails && (
        <ContractDetails
          contractData={contractDetails}
          closeContractHandler={closeContractHandler}
        />
      )}

      {!viewContractDetails && (
        <>
          {" "}
          <h1>Contract Table</h1>{" "}
          <MaterialTable
            onRowClick={(evt, selectedRow) => setcontractDetails(selectedRow)}
            title=""
            columns={columns}
            data={contractData}
            icons={tableIcons}
            options={{
              headerStyle: {
                backgroundColor: "#1976d2",
              },
            }}
          />
        </>
      )}
    </>
  );
};
export default ContractTable;
