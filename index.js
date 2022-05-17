"use strict";

const notejs = [
  {
    ancho: "26cm",
    largo: "50m",
    unidades: "4",
  },
  {
    ancho: "55cm",
    largo: "50m",
    unidades: "4",
  },
  {
    ancho: "45cm",
    largo: "50m",
    unidades: "4",
  },
];

// const mapa = notejs.map((task) => {
//   task.ancho + " x " + task.largo + " " + task.unidades;
// });

const getListPaper = document.getElementById("button_Note");
const seeListPaper = document.getElementById("taskList");

const s = document.createElement("div");

// const createElement = document.createElement("div");
const arrayNote = [];

const createListPaper = () => {
  getListPaper.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("numbernote" + s);
    const numberNote = notejs.map((task) => {
      const a = task.ancho + " x " + task.largo + " " + task.unidades + " uds";

      taskList.append(s);
      console.log(s);
    });
  });
};

createListPaper();
