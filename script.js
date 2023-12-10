
//get data from the data.json file
getData(); 
  
        async function getData() { 
            const response = await fetch('data.json'); 
            const data = await response.json(); 
            length = data.data.length; 
            
            //stages data output for the HTML table
            let dataprint = document.querySelector("#data-output");
            outputPrint = "";

            labels = []; 
            values = []; 
            for (let i = 0; i < length; i++) { 
                let obj = data.data[i];
                
                //prints data onto table 
                outputPrint += `
                    <tr>
                        <td>${obj.id}</td>
                        <td>${obj.name}</td>
                        <td>${obj.count}</td>
                    </tr>
                
                `;
                labels.push(data.data[i].name); 
                values.push(data.data[i].count);                 
            } 
            dataprint.innerHTML = outputPrint;
            


            new Chart(document.getElementById("bar-chart"), { 
                type: 'pie', 
                data: { 
                    //get names of data from the json file and adds it to the legend
                    labels: labels, 
                    datasets: [ 
                        { 
                            label: "Measuring Data", 
                            backgroundColor: ["red", 
                                              "purple",  
                                              "blue"
                                            ], 
                            //get numerical data from the json file and adds it to the legend           
                            data: values 
                        } 
                    ] 
                }, 
                options: { 
                    responsive:true,
                    data:data,
                    plugins:{
                        legend: { 
                            display: true,
                            position: 'top'
                    }
                    
                     }, 
                    title: { 
                        display: true, 
                        text: 'JSON Data populating ChartJS bar chart' 
                    } 
                } 
            }); 
  
        } 

