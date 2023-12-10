
//get data from the data.json file
getData(); 
  
        async function getData() { 
            const response = await fetch('data.json'); 
            const data = await response.json(); 
            length = data.data.length; 
  
            labels = []; 
            values = []; 
            let total = 0;
            for (let i = 0; i < length; i++) { 
                labels.push(data.data[i].name); 
                values.push(data.data[i].count);                 
            } 

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

