// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: May 2024
// This file contains the JS functions for index.html

window.onload = function CaseTest() {

  const params = new URLSearchParams(document.location.search)
  //input with URL
  const pi = "π"
  const radius = parseFloat(params.get("radius"))
  const unit = params.get("unit")

  //process
  const ans = (4 / 3 * (radius ** 3)).toFixed(2)
  document.getElementById("get_radius").innerHTML = radius
  document.getElementById("get_unit").innerHTML = unit
  document.getElementById("Ans").innerHTML = "V = " + ans + pi + unit + "³"
}