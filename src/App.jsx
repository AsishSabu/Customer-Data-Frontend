import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SidebarComponent from "./components/Sidebar";
import axios from "axios";
import { formatDate } from "./utils/formatDate";

function App() {
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get(`https://asishsabu.site/customers?page=${currentPage}`)
      .then(({ data }) => {
        console.log(data);

        const formattedData = data.data.map((customer) => ({
          ...customer,
          dob: formatDate(customer.dob),
        }));
        setTotal(data.count);
        setRowData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);
  return (
    <>
      <Header />
      <div className="md:grid md:grid-cols-12 flex flex-col min-h-screen">
        <SidebarComponent setRowData={setRowData} setTotal={setTotal} />
        <Main
          rowData={rowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={total}
        />
      </div>
    </>
  );
}

export default App;
