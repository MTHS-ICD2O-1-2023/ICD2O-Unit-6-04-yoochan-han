// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: May 2024
// This file contains the JS functions for index.html

window.onload = function CaseTest() {

  const params = new URLSearchParams(document.location.search)
  //input with URL
  const height = parseFloat(params.get("height"))
  const base = parseFloat(params.get("base"))
  const unit = params.get("unit")

  //process
  const ans = 1/2*(height*base).toFixed(2)
  document.getElementById("get_radius").innerHTML = 
  document.getElementById("get_unit").innerHTML = unit
  document.getElementById("Ans").innerHTML = "S = " + ans + unit + "²"
}