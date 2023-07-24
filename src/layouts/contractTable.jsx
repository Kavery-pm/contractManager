import MaterialTable from 'material-table'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import SearchIcon from "@mui/icons-material/Search";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const tableIcons = {
     Search: SearchIcon,
    SortArrow: ArrowDownwardIcon,
    ViewColumn: ViewColumnIcon,
    FirstPage: FirstPageIcon,
    PreviousPage: ChevronLeftIcon,
    NextPage: ChevronRightIcon,
    LastPage: LastPageIcon,
  };
const ContractTable = ()=>{
    const data = [
        {
            "id": 1,
            "firstName": "Tobias",
            "lastName": "Wilken",
            "status": "active",
            "startData": "2023-07-14T00:00:00.000Z",
            "cancelationDate": "2023-11-02T00:00:00.000Z",
            "createdAt": "2023-07-10T13:27:11.508Z",
            "updatedAt": "2023-07-10T13:27:11.508Z"
        },
        {
            "id": 2,
            "firstName": "Luke",
            "lastName": "Skywalker",
            "email": "luke@tatooine.net",
            "createdAt": "2023-07-10T22:01:45.243Z",
            "updatedAt": "2023-07-10T22:01:45.243Z"
        },
        {
            "id": 3,
            "firstName": "Luke",
            "lastName": "Skywalker",
            "email": "luke@tatooine.net",
            "createdAt": "2023-07-10T22:15:47.172Z",
            "updatedAt": "2023-07-10T22:15:47.172Z"
        },
        {
            "id": 4,
            "firstName": "Han",
            "lastName": "Solo",
            "createdAt": "2023-07-10T22:28:15.396Z",
            "updatedAt": "2023-07-10T22:28:15.396Z"
        },
        {
            "id": 5,
            "firstName": "Lando",
            "lastName": "Calrissian",
            "status": "draft",
            "createdAt": "2023-07-11T06:55:49.185Z",
            "updatedAt": "2023-07-11T06:55:49.185Z"
        },
        {
            "id": 38,
            "firstName": "R2",
            "lastName": "D2",
            "email": "r2d2@universe.net",
            "status": "active",
            "createdAt": "2023-07-11T18:47:04.929Z",
            "updatedAt": "2023-07-11T18:47:04.929Z"
        },
        {
            "id": 39,
            "firstName": "R2",
            "lastName": "D2",
            "email": "r2d2@universe.net",
            "status": "active",
            "createdAt": "2023-07-11T18:49:37.879Z",
            "updatedAt": "2023-07-11T18:49:37.879Z"
        },
        {
            "id": 40,
            "firstName": "C3",
            "lastName": "PO",
            "email": "r2d2@universe.net",
            "status": "draft",
            "startData": "2023-08-02T00:00:00.000Z",
            "cancelationDate": "2023-09-23T00:00:00.000Z",
            "createdAt": "2023-07-11T18:53:32.477Z",
            "updatedAt": "2023-07-11T18:53:32.477Z"
        },
        {
            "id": 41,
            "firstName": "Anakin",
            "lastName": "Skywalker",
            "status": "active",
            "startData": "2023-08-05T00:00:00.000Z",
            "cancelationDate": "2023-07-29T00:00:00.000Z",
            "createdAt": "2023-07-11T19:30:53.968Z",
            "updatedAt": "2023-07-11T19:30:53.968Z"
        },
        {
            "id": 42,
            "firstName": "Darth ",
            "lastName": "Sidious",
            "status": "draft",
            "startData": "2023-08-17T00:00:00.000Z",
            "cancelationDate": "2023-10-12T00:00:00.000Z",
            "createdAt": "2023-07-11T19:32:50.709Z",
            "updatedAt": "2023-07-11T19:32:50.709Z"
        },
        {
            "id": 43,
            "firstName": "Rey",
            "lastName": "Skywalker",
            "status": "active",
            "startData": "2023-08-02T00:00:00.000Z",
            "cancelationDate": "2023-10-25T00:00:00.000Z",
            "createdAt": "2023-07-11T19:38:00.787Z",
            "updatedAt": "2023-07-11T19:38:00.787Z"
        },
        {
            "id": 44,
            "firstName": "Darth",
            "lastName": "Plagueis",
            "createdAt": "2023-07-11T20:42:02.662Z",
            "updatedAt": "2023-07-11T20:42:02.662Z"
        },
        {
            "id": 45,
            "firstName": "Ahsoka",
            "lastName": "Tano",
            "createdAt": "2023-07-12T06:03:31.118Z",
            "updatedAt": "2023-07-12T06:03:31.118Z"
        },
        {
            "id": 46,
            "firstName": "twtest",
            "createdAt": "2023-07-12T06:35:26.006Z",
            "updatedAt": "2023-07-12T06:35:26.006Z"
        },
        {
            "id": 47,
            "firstName": "twtest2",
            "createdAt": "2023-07-12T06:35:40.446Z",
            "updatedAt": "2023-07-12T06:35:40.446Z"
        },
        {
            "id": 48,
            "firstName": "Some",
            "lastName": "one",
            "status": "active",
            "category": 1,
            "createdAt": "2023-07-12T07:11:14.045Z",
            "updatedAt": "2023-07-12T07:11:14.045Z"
        },
        {
            "id": 49,
            "firstName": "Fixed",
            "lastName": "the date",
            "startDate": "2023-07-13T00:00:00.000Z",
            "category": 1,
            "cancelationDate": "2023-07-13T00:00:00.000Z",
            "createdAt": "2023-07-12T07:11:41.610Z",
            "updatedAt": "2023-07-12T07:11:41.610Z"
        },
        {
            "id": 50,
            "firstName": "Jacen",
            "lastName": "Syndulla",
            "email": "jacen@syndulla.com",
            "status": "draft",
            "startDate": "2023-07-13T00:00:00.000Z",
            "category": 4,
            "cancelationDate": "2023-07-13T00:00:00.000Z",
            "createdAt": "2023-07-12T09:41:30.652Z",
            "updatedAt": "2023-07-12T09:41:30.652Z"
        },
        {
            "id": 51,
            "firstName": "Sabine",
            "lastName": "Wrap",
            "email": "sabine@wrap.com",
            "status": "draft",
            "startDate": "2023-08-01T00:00:00.000Z",
            "category": 4,
            "createdAt": "2023-07-12T09:52:56.570Z",
            "updatedAt": "2023-07-12T09:52:56.570Z"
        },
        {
            "id": 52,
            "firstName": "Darth",
            "lastName": "Vader",
            "email": "darth@deathstar.com",
            "status": "draft",
            "startDate": "2023-08-04T00:00:00.000Z",
            "category": 4,
            "cancelationDate": "2023-08-05T00:00:00.000Z",
            "createdAt": "2023-07-12T10:06:48.509Z",
            "updatedAt": "2023-07-12T10:06:48.509Z"
        },
        {
            "id": 53,
            "firstName": "Hello ",
            "lastName": "World",
            "email": "test@gmail.com",
            "status": "active",
            "startData": "2023-07-15T00:00:00.000Z",
            "cancelationDate": "2023-07-27T00:00:00.000Z",
            "createdAt": "2023-07-14T18:41:15.235Z",
            "updatedAt": "2023-07-14T18:41:15.235Z"
        },
        {
            "id": 54,
            "firstName": "ZAE",
            "lastName": "AZE",
            "email": "EZA",
            "status": "draft",
            "startDate": "2023-07-01T00:00:00.000Z",
            "category": 4,
            "cancelationDate": "2023-07-01T00:00:00.000Z",
            "createdAt": "2023-07-18T10:30:03.318Z",
            "updatedAt": "2023-07-18T10:30:03.318Z"
        }
    ] 
    const columns = [
        { title: "Name", field: "firstName" },
        { title: "Surname", field: "lastName" },
        {title: "ContractDetails", field:"id",
        render: (rowData) => {
            if (rowData.id !== undefined) {
              return (
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    title="show contract details"
                    
                  >
                  
                   X
                  </span>
                </div>
              );
            }
          },},
        { title: "status", field: "status" },
    
      ];
    return (
      <>
      <h1>Contract Table</h1>
      <MaterialTable

   title=""
   columns={columns}
   data={data}
   icons={tableIcons}
   options={{
    
      
   
     headerStyle: {
       backgroundColor: "#1976d2", 
     },
   }}
 />
      </>
    )
}
export default ContractTable