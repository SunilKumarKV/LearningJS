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

}