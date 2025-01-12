"use client";
import { useAppState, useAppDispatch } from "@/app/StateProvider";

import {
  IconChevronCompactDown,
  IconChevronCompactUp,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

const PersonalInfoContent = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <span>PersonalInfo</span>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={state.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={state.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};


export default function PersonalInfoDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm">
        <IconUser size={24} />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">
            Personal Information
          </span>
          <span className="text-xs text-gray-500">
            Add your personal information
          </span>
        </div>
        {isOpen ? (
          <IconChevronCompactUp size={24} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <IconChevronCompactDown
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm">
          <PersonalInfoContent />
        </div>
      )}
    </>
  );
}
