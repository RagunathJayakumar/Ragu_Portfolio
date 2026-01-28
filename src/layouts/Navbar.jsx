import React from 'react';
import { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {


  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default Navbar
