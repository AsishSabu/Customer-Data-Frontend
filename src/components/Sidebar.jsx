import { useEffect, useState } from "react";
import SearchForm from "./SearchBox";
import axios from "axios";
import { formatDate } from "../utils/formatDate";

const SidebarComponent = ({ setRowData, setTotal,setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("");


  // Function to fetch filtered data
  const handleFilter = () => {
    const ageQuery = ageFilter
      ? `&minAge=${ageFilter[0]}&maxAge=${ageFilter[1]}`
      : "";
    const searchQuery = searchTerm ? `&search=${searchTerm}` : "";
    axios
      .get(`https://asishsabu.site/customers?${searchQuery}${ageQuery}`)
      .then(({ data }) => {
        const formattedData = data.data.map((customer) => ({
          ...customer,
          dob: formatDate(customer.dob),
        }));
        setTotal(data.count);
        setRowData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    setLoading(true)
    handleFilter();
    setLoading(false)
  }, [ageFilter]);

  return (
    <div className="md:h-screen md:col-span-3 row-span-2  text-black ">
      <div className="mt-2 p-2 mx-auto w-full ">
        <SearchForm
          state={searchTerm}
          setState={setSearchTerm}
          handleSubmit={handleFilter}
        />
      </div>
      <div className="md:px-4">
        <p className="font-medium w-fit mb-2 mx-auto">Filter by Age</p>
        <div className="space-y-2 md:flex md:flex-col flex flex-row gap-5 md:w-full  w-fit mx-auto">

          <button
            className={`md:w-full p-2 rounded-md mt-2 ${
              ageFilter[0] === 0 && ageFilter[1] === 20
                ? "bg-[#7a81be]"
                : "bg-gray-300"
            }`}
            onClick={() => {
              setAgeFilter([0, 20]);
            }}
          > 0 - 20
          </button>
          <button
            className={`md:w-full p-2 rounded-md ${
              ageFilter[0] === 21 && ageFilter[1] === 40
                ? "bg-[#7a81be]"
                : "bg-gray-300"
            }`}
            onClick={() => {
              setAgeFilter([21, 40]);
            }}
          >
            21 - 40
          </button>
          <button
            className={`md:w-full p-2 rounded-md ${
              ageFilter[0] === 41 && ageFilter[1] === 60
                ? "bg-[#7a81be]"
                : "bg-gray-300"
            }`}
            onClick={() => {
              setAgeFilter([41, 60]);
            }}
          >
            41 - 60
          </button>
          <button
            className={`md:w-full p-2 rounded-md ${
              !ageFilter ? "bg-[#7a81be]" : "bg-gray-300"
            }`}
            onClick={() => {
              setAgeFilter("");
            }}
          >
            All Ages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
