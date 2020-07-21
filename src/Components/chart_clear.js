import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
    }

    componentDidMount(){
        this.getChartData();
    }

    
    getChartData(){

       //acessando a URL do backend 
       axios.get("http://localhost:3000/headspace_dev1").then(res => {
     
            //pegando valor do api - uri - localhost
            const value = res.data;

            //adentrando o campo [result]
            let novo_array = value["result"];

            //splitando os dados em: Data, Dados e Property
            //-----------------------------------------------__________--------------------------------------   

            let i = 0;
            let j = 0;

            //array novo só com os dados
            let gwEcho1_band_temp_array = [];

           novo_array.map(function(i){
            gwEcho1_band_temp_array.push({
                    "echo1_band_temp": i.gwEcho1_band_temp,
                })
                return gwEcho1_band_temp_array;
            })

            //array novo só com as datas (timestamp original em Unix/Epoch Time)
            let data_array= [];

            novo_array.map(function(i){
                data_array.push({
                        "data": i.time,
                    })
                    return data_array;
                })

             //array novo para selecionar property  
             let property_array = [];

            novo_array.map(function(i){
                property_array.push({
                        "property": i.Properties,
                    })
                    return property_array;
                })

            //manipulando o array de property
            let property_array_1= [];
            
            for (i=0; i<property_array.length;i++){
                property_array_1[i]=property_array[i]["property"]["topic"];
           }

           //manipulando o array de dados
            let gwEcho1_band_temp_array_1 = gwEcho1_band_temp_array.map(a => a.echo1_band_temp);  
            let gwEcho1_band_temp_array_3=[];

            j =0;

            for (i=0; i<gwEcho1_band_temp_array_1.length;i++){
                if (property_array_1[i]==="telemetry"){
                    gwEcho1_band_temp_array_3[j]=gwEcho1_band_temp_array_1[i];
                        j = j+1;
                } else {
                }
            }
         
           //manipulando o array de data
            let data_array_2 = [];

             j =0;

            for (i=0; i<data_array.length;i++){
                if (property_array_1[i]==="telemetry"){
                        data_array_2[j]=data_array[i]["data"];
                        j = j+1;
                } else {
                }
            }

            //convertendo EPOCH time in Brazil UTC time
            var utc_data_array = [];
            var utc_data_array_1 = [];
            var data_array_3 = [];

            for (i=0; i<data_array_2.length;i++){
                data_array_3[i]= data_array_2[i]*1000;
                utc_data_array_1[i] = new Date(data_array_3[i]);
                utc_data_array[i] = utc_data_array_1[i].toLocaleString();
            }
        
            //Dados limpos e finalizados
            //-----------------------------------------------__________--------------------------------------   

            //plotagem dos arrays limpos
            this.setState({
                chartData:{
                    labels:utc_data_array,
                    datasets: [
                        {
                            label: "teste",
                            data: gwEcho1_band_temp_array_3,
                            lineTension: 0.1,
                            fill: false,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                        }
                    ]
                }
            });
        });
    }



    render(){
        return(
            <div className = "chart">
                
                <Line
                    data = {this.state.chartData}
                    width = {1200}
                    height = {400}
                    options={{
                        title:{
                            display: true,
                            text: 'teste',
                            fontSize: 30
                        },
                        legend:{
                            display:false,
                            position: 'top',
                        },
                        scales:{
                            yAxes:[{
                                ticks: {
                                    beginAtZero: true,
                                }
                            }]
                        }
                    }}
                 />
                
            </div>
        )
    }
}

export default Chart;