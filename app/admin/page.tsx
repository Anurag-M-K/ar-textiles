"use client";
// import { db } from '@/config/firebase';
import { AuthContext } from "@/context/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Sidebar, { SidebarItem } from "./AdminDashboard";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa6";
import { IoMdCopy, IoMdLogOut } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
// import BusinessEditModal from './BusinessEditModal';
import toast, { Toaster } from "react-hot-toast";
import { GiClothes } from "react-icons/gi";
import AddDataModal from "./AddDataModal";
import { db } from "@/config/firebase.config";

type Business = {
  productName: string;
  category: number;
  productPrice: number;
  productImageUrl: string;
};
function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const [productData, setProductData] = useState<Array<any>>([]);


  async function fetchAllData(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  }
  async function fetchData() {
    try {
      const collectionName = "products";
      const data = await fetchAllData(collectionName);
      setProductData(data)
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])

  const columns: TableColumn<Business>[] = [
    {
      name: "PRODUCT NAME",
      selector: (row: { productName: string }) => row?.productName,
    },
    {
      name: "CATEGORY",
      selector: (row: { category: any }) => row?.category 
    },
    {
      name: "PRODUCT PRICE",
      selector: (row: { productPrice: any }) => row?.productPrice || 0,
    },
    {
      name: "PRODUCT PHOTO",
      selector: (row: { productImageUrl: any }) => <img src={row?.productImageUrl} className="p-2 " alt="" />
    },
   
  ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        border: "1px solid gray",
        backGroundColor: "gray",
      },
    },
    cells: {
      style: {
        borderRight: "1px solid gray",
        borderLeft: "1px solid gray",
        borderBottom: "1px solid gray",
      },
    },
  };
  if (user?.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <div className="flex">
        <div className="p-10 w-full  ">
          <div className="flex justify-between ">
            <h1 className="text-3xl">Welcom Super Admin</h1>
            <div className="hidden md:flex ">
              <RiAdminFill size={30} />
              <h1 className="flex justify-center items-center mx-3">
                {user?.displayName}
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl">AR Textiles</h2>
          </div>
          <div className="mt-10  ">
            <div className="flex justify-end ">
              <AddDataModal />
            </div>
            <div className="table w-full   overflow mt-3">
              <DataTable
                columns={columns}
                data={productData}
                customStyles={customStyles}
                pagination
                responsive={true}
              />
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex  justify-center items-center h-screen text-3xl font-medium">
        You do not have access to this page.
      </div>
    );
  }
}

export default AdminDashboard;
