function start() {
  // get the reference for the body
  const myBody = document.getElementsByTagName("body")[0];

  // creates <table> and <tbody> elements
  const myTable = document.createElement("table");
  const myTableBody = document.createElement("tbody");

  // creating all cells
  for (let j = 0; j < 3; j++){
    // creates a <tr> element
    const myCurrentRow = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
      // creates a <td> element
      const myCurrentCell = document.createElement("td");
      // creates a Text Node
      const currentText = document.createTextNode(`cell is row ${j}, column ${i}`,);

      // appends the Text Node we created into the cell <td>
      myCurrentCell.appendChild(currentText);
      // appends the cell <td> into the row <tr>
      myCurrentRow.appendChild(myCurrentCell);
    }
    // appends the row <tr> into <tbody>
    myTableBody.appendChild(myCurrentRow);
  }
  
  // appends <tbody> into <table>
  myTable.appendChild(myTableBody);
  // appends <table> into <body>
  myBody.appendChild(myTable);
  // sets the border attribute of myTable to 2;
  myTable.setAttribute("border", "2");
}


//Creating the Table
function generateTable() {
    //create <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    //create all cells
    for (let i = 0; i < 2; i++){
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++){
     // Create a <td> element and a text node, make the text
     // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}


//Setting the background color of a paragraph
function setBackground() {
  const paragraph = document.getElementsByTagName("p");
  const secondParagraph = paragraph[1];

  secondParagraph.style.background = "red";

  //Changeing Text Node
  const myTextNode = document.createTextNode("World");
  secondParagraph.appendChild(myTextNode);

  //create New Element
  const myNewPTagNode = document.createElement("p");
  myNewPTagNode.firstChild.data = "This is a new Element";
  myBody.appendChild(myNewPTagNode);

  //Removing nodes with the removeChild(..) method
  // secondParagraph.removeChild(myTextNode);
}