import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-gray-800 p-20 rounded-3xl">
      <h2 className="text-white text-3xl py-6 font-black">Loan Request</h2>
      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit(async (data) => {
          data.amount = parseFloat(data.amount);
          try {
            const response = await axios.post(
              "https://6heqmtw8dg.execute-api.us-east-2.amazonaws.com/loan/",
              {
                tax_id: data.tax_id,
                business_name: data.business_name,
                amount: data.amount,
              }
            );
            if (response.data.message == "Declined") {
              toast.error(response.data.message);
            } else {
              toast.success(response.data.message);
            }
          } catch (error) {
            toast.error("Error sending data");
          }
        })}
      >
        <div className="mb-5">
          <label
            htmlFor="tax_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your tax id
          </label>
          <input
            {...register("tax_id")}
            type="text"
            placeholder="TaxID"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-5">
          <label
            htmlFor="request_amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Request Amount
          </label>
          <input
            type="number"
            {...register("amount")}
            placeholder="Amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="business_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Business Name
          </label>
          <input
            {...register("business_name")}
            type="text"
            placeholder="Business name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <button
          type="submit"
          className="rounded-3xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
}
