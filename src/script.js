//Inicializar red neuronal
var network = new brain.NeuralNetwork();

network.train([
    //Setosa
    {input: {sepalLength: .51, sepalWidth: .35, petalLength: .14, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .49, sepalWidth: .30, petalLength: .14, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .47, sepalWidth: .32, petalLength: .13, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .46, sepalWidth: .31, petalLength: .15, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .50, sepalWidth: .36, petalLength: .14, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .54, sepalWidth: .39, petalLength: .17, petalWidth: .04}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .46, sepalWidth: .34, petalLength: .14, petalWidth: .03}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .50, sepalWidth: .34, petalLength: .15, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .44, sepalWidth: .29, petalLength: .14, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .49, sepalWidth: .31, petalLength: .15, petalWidth: .01}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .54, sepalWidth: .37, petalLength: .15, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .48, sepalWidth: .34, petalLength: .16, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .48, sepalWidth: .30, petalLength: .14, petalWidth: .01}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .43, sepalWidth: .30, petalLength: .11, petalWidth: .01}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .58, sepalWidth: .40, petalLength: .12, petalWidth: .02}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .57, sepalWidth: .44, petalLength: .15, petalWidth: .04}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .54, sepalWidth: .39, petalLength: .13, petalWidth: .04}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .51, sepalWidth: .35, petalLength: .14, petalWidth: .03}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .57, sepalWidth: .38, petalLength: .17, petalWidth: .03}, output: {setosa:1 ,vesicolor:0, virginica:0}},
    {input: {sepalLength: .51, sepalWidth: .38, petalLength: .15, petalWidth: .03}, output: {setosa:1 ,vesicolor:0, virginica:0}},
   
    // Versicolor
    {input: {sepalLength: .70, sepalWidth: .32, petalLength: .47, petalWidth: .14}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .64, sepalWidth: .32, petalLength: .45, petalWidth: .15}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .69, sepalWidth: .31, petalLength: .49, petalWidth: .15}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .55, sepalWidth: .23, petalLength: .40, petalWidth: .13}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .65, sepalWidth: .28, petalLength: .46, petalWidth: .15}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .57, sepalWidth: .28, petalLength: .45, petalWidth: .13}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .63, sepalWidth: .33, petalLength: .47, petalWidth: .16}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .49, sepalWidth: .24, petalLength: .33, petalWidth: .10}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .66, sepalWidth: .29, petalLength: .46, petalWidth: .13}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .52, sepalWidth: .27, petalLength: .39, petalWidth: .14}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .50, sepalWidth: .20, petalLength: .35, petalWidth: .10}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .59, sepalWidth: .30, petalLength: .42, petalWidth: .15}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .60, sepalWidth: .22, petalLength: .40, petalWidth: .10}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .61, sepalWidth: .29, petalLength: .47, petalWidth: .14}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .56, sepalWidth: .29, petalLength: .36, petalWidth: .13}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .67, sepalWidth: .31, petalLength: .44, petalWidth: .14}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .56, sepalWidth: .29, petalLength: .36, petalWidth: .13}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .62, sepalWidth: .22, petalLength: .45, petalWidth: .15}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .58, sepalWidth: .27, petalLength: .41, petalWidth: .10}, output: {setosa:0 ,vesicolor:1, virginica:0}},
    {input: {sepalLength: .56, sepalWidth: .25, petalLength: .39, petalWidth: .11}, output: {setosa:0 ,vesicolor:1, virginica:0}},
   
    // Virginica
    {input: {sepalLength: .63, sepalWidth: .33, petalLength: .60, petalWidth: .25}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .58, sepalWidth: .27, petalLength: .51, petalWidth: .19}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .71, sepalWidth: .30, petalLength: .59, petalWidth: .21}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .65, sepalWidth: .30, petalLength: .58, petalWidth: .22}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .76, sepalWidth: .30, petalLength: .66, petalWidth: .21}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .49, sepalWidth: .25, petalLength: .45, petalWidth: .17}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .73, sepalWidth: .29, petalLength: .63, petalWidth: .18}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .67, sepalWidth: .25, petalLength: .58, petalWidth: .18}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .73, sepalWidth: .29, petalLength: .63, petalWidth: .18}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .67, sepalWidth: .25, petalLength: .58, petalWidth: .18}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .72, sepalWidth: .36, petalLength: .61, petalWidth: .25}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .65, sepalWidth: .32, petalLength: .51, petalWidth: .20}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .64, sepalWidth: .32, petalLength: .53, petalWidth: .19}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .68, sepalWidth: .30, petalLength: .55, petalWidth: .21}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .57, sepalWidth: .25, petalLength: .50, petalWidth: .20}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .58, sepalWidth: .28, petalLength: .51, petalWidth: .24}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .64, sepalWidth: .32, petalLength: .53, petalWidth: .23}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .65, sepalWidth: .30, petalLength: .55, petalWidth: .18}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .77, sepalWidth: .38, petalLength: .67, petalWidth: .22}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLength: .77, sepalWidth: .26, petalLength: .69, petalWidth: .23}, output: {setosa:0 ,vesicolor:0, virginica:1}},
    {input: {sepalLenght: .60, sepalWidth: .22, petalLength: .50, petalWidth: .15}, output: {setosa:0 ,vesicolor:0, virginica:1}},
  ])

function update() {
  var table = document.getElementById("resultTable");
  var measurements=[document.getElementById("sepalLength").value,document.getElementById("sepalWidth").value,document.getElementById("petalLength").value,document.getElementById("petalWidth").value];

  console.log(measurements[0]);
  console.log(measurements[1]);
  console.log(measurements[2]);
  console.log(measurements[3]);

  var entry = {
    sepalLength: measurements[0]/10,
    sepalWidth: measurements[1]/10,
    petalLength: measurements[2]/10,
    petalWidth: measurements[3]/10
  }

  console.log(entry.sepalLength);
  console.log(entry.sepalWidth);
  console.log(entry.petalLength);
  console.log(entry.petalWidth);

  var result = network.run(entry);
  console.log(result);
  table.appendChild(createResultToShow(measurements,result))
}

function createResultToShow(measurements,result){
  var node = document.createElement("tr")
  var highestProbability=0
  var type=""
 
  for (let i = 0; i < measurements.length; i++) {
    var tData = document.createElement("td")
    var elem = document.createTextNode(measurements[i] + "cm ");
    tData.appendChild(elem)
    node.appendChild(tData)    
    
    if(i == 3){
      for(var species in result){ 
        if(result[species]>highestProbability){
          type=""
          highestProbability=result[species]
          type=species
        }
      } 
    }
  }
  console.log(type)
  node.appendChild(tData.appendChild(document.createTextNode(type)))
  return node
}