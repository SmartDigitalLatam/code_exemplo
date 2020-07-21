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
       axios.get("http://localhost:3000/data").then(res => {
     
            //pegando valor do api - uri - localhost
            const value = res.data;

            //adentrando o campo [result]
            let novo_array = value["result"];

            //splitando os dados em: Data, Dados e ConcentratedPressure
            //-----------------------------------------------__________--------------------------------------   

            let i = 0;
            let j = 0;

            //array novo só com os dados
            let FeedPressure_array = [];
 
            novo_array.map(function(i){
             FeedPressure_array.push({
                     "FeedPressure": i.FeedPressure,
                 })
                 return FeedPressure_array;
             })
 
             //array novo só com as datas (timestamp original em Unix/Epoch Time)
             let data_array= [];
 
             novo_array.map(function(i){
                 data_array.push({
                         "data": i.Date,
                     })
                     return data_array;
                 })
 
              //array novo para selecionar concentrate pressre 
              let ConcentratedPressure_array = [];
 
             novo_array.map(function(i){
                 ConcentratedPressure_array.push({
                         "ConcentratedPressure": i.ConcentratedPressure,
                     })
                     return ConcentratedPressure_array;
                 })

                 let FeedConductivity_array = [];
                 novo_array.map(function(i){
                    FeedConductivity_array.push({
                        "FeedConductivity": i.FeedConductivity,
                    });
                })


                let PermConductivity_array = [];
                novo_array.map(function(i){
                    PermConductivity_array.push({
                        "PermConductivity": i.PermConductivity,
                    });
                })


                let PermFlow_array = [];
                novo_array.map(function(i){
                    PermFlow_array.push({
                        "PermFlow": i.PermFlow,
                    });
                })


                let ConcentratedFlow_array = [];
                novo_array.map(function(i){
                    ConcentratedFlow_array.push({
                        "ConcentratedFlow": i.ConcentratedFlow,
                    });
                })


                let FeedFlow_array = [];
                novo_array.map(function(i){
                    FeedFlow_array.push({
                        "FeedFlow": i.FeedFlow,
                    });
                })


                let FeeTemperature_array = [];
                novo_array.map(function(i){
                    FeeTemperature_array.push({
                        "FeeTemperature": i.FeeTemperature,
                    });
                })



           //manipulando o array de dados
             let FeedPressure_array_1 = FeedPressure_array.map(a => a.FeedPressure);  
             let ConcentratedPressure_array_1 = ConcentratedPressure_array.map(a => a.ConcentratedPressure);  
             let FeedConductivity_array_1 = FeedConductivity_array.map(a => a.FeedConductivity); 
             let PermConductivity_array_1 = PermConductivity_array.map(a => a.PermConductivity); 
             let PermFlow_array_1 = PermFlow_array.map(a => a.PermFlow); 
             let ConcentratedFlow_array_1 = ConcentratedFlow_array.map(a => a.ConcentratedFlow); 
             let FeedFlow_array_1 = FeedFlow_array.map(a => a.FeedFlow); 
             let FeeTemperature_array_1 = FeeTemperature_array.map(a => a.FeeTemperature); 
             let data_array_1 = data_array.map(a => a.data);    
 
              //converte a array de string em nnumeros
              let FeedPressure_array_2 = FeedPressure_array_1.map(Number);
              let ConcentratedPressure_array_2 = ConcentratedPressure_array_1.map(Number);
              let FeedConductivity_array_2 = FeedConductivity_array_1.map(Number);
              let PermConductivity_array_2 = PermConductivity_array_1.map(Number);
              let PermFlow_array_2 = PermFlow_array_1.map(Number);
              let ConcentratedFlow_array_2 = ConcentratedFlow_array_1.map(Number);
              let FeedFlow_array_2 = FeedFlow_array_1.map(Number);
              let FeeTemperature_array_2 = FeeTemperature_array_1.map(Number);

            console.log("array de Feed Pressure");
            console.log(FeedPressure_array_2);
            console.log("array de Concentrated Pressure");
            console.log(ConcentratedPressure_array_2);
            console.log("array de  FeedConductivity");
            console.log(FeedConductivity_array_2);
            console.log("array de  PermConductivity_array_2");
            console.log(PermConductivity_array_2);
            console.log("array de  PermFlow_array_2");
            console.log(PermFlow_array_2);
            console.log("array de  ConcentratedFlow_array_2");
            console.log(ConcentratedFlow_array_2);
            console.log("array de  FeedFlow_array_2");
            console.log(FeedFlow_array_2);
            console.log("array de  FeeTemperature_array_2");
            console.log(FeeTemperature_array_2);
            console.log("array de Data");
            console.log(data_array_1);
        
        
            //Dados limpos e finalizados
            //-----------------------------------------------__________--------------------------------------   

            //---------------------------PEGANDO ÚLTIMO VALOR DA STRING--------------------------------------
    
    //armazenando valor da última posição na var k
    let k = FeedPressure_array_2.length;
    
    //let FeedPressure_value = FeedPressure_array_2[k-100];
    //let ConcentratedPressure_value = ConcentratedPressure_array_2[k-100];
    //let FeedConductivity_array_2[i] = FeedConductivity_array_2[k-100];
    //let PermConductivity_array_2[i] = PermConductivity_array_2[k-100];
    //let PermFlow_value = PermFlow_array_2[k-100];
    //let ConcentratedFlow_value = ConcentratedFlow_array_2[k-100];
    //let FeedFlow_array_2[i] = FeedFlow_array_2[k-100];
    //let FeeTemperature_value = FeeTemperature_array_2[k-100];

    console.log("capturando valor de quantas entradas tem o array no total - k - ")
    console.log(k);

    //console.log("capturando último valor [posição] do dado na array do feed pressure")
    //console.log(FeedPressure_value);

    //console.log("capturando último valor [posição] do dado na array do concentrated pressure")
    //console.log(ConcentratedPressure_value);

    //console.log("capturando último valor [posição] do dado na array do FeedConductivity_array_2[i]")
    //console.log(FeedConductivity_array_2[i]);

    //console.log("capturando último valor [posição] do dado na array do PermConductivity_value")
    //console.log(PermConductivity_value);

    //console.log("capturando último valor [posição] do dado na array do PermFlow_value")
    //console.log(PermFlow_value);

    //console.log("capturando último valor [posição] do dado na array do ConcentratedFlow_value")
    //console.log(ConcentratedFlow_value);

    //console.log("capturando último valor [posição] do dado na array do FeedFlow_array_2[i]")
    //console.log(FeedFlow_array_2[i]);

    
    //console.log("capturando último valor [posição] do dado na array do FeeTemperature_value")
    //console.log(FeeTemperature_value);

    //---------------------------CÁLCULO DA NORMALIZAÇÃO--------------------------------------
    
   
   //----------------------------------------DEFINIÇÃO DE VARIÁVEIS MANUAIS-------------------------------

   let pressao_permeado = 0;
   let pressao_net_driving_zero = 0;
   let Temp_correcao_zero = 1.047;
   let conc_media_calculada_entrada_zero = 0;
   let vazao_permeado_zero = 0;
   let TDS_entrada_calculado_zero = 132.958;


    //---------------------------CÁLCULO DA NORMALIZAÇÃO--------------------------------------
    
    //DIFFERENTIAL PRESSURE

    let PressaoDif_array = [];
            for (let i=0; i < FeedPressure_array_2.length+1; i++)
            {
                if (FeedPressure_array_2[i]>0){
                PressaoDif_array[i] = FeedPressure_array_2[i] - ConcentratedPressure_array_2[i];
                }
                else PressaoDif_array[i] = 0; 
            }
    
            let PressaoDif_value = PressaoDif_array[k-100];
            console.log("capturando último valor [posição] do dado na array do DIFF PRESSURE")
            console.log(PressaoDif_value);
           

            //cálculo do TDS ENTRADA CALCULADO (ppm)
 let TDS_entrada_calculado_array[i]_array = [];

            for (let i=0; i < FeedConductivity_array_2.length+1; i++){
 if (FeedConductivity_array_2[i] === 0) 
 { 
     TDS_entrada_calculado_array[i]_array[i] = 0;
 }
 if (FeedConductivity_array_2[i] > 0 && FeedConductivity_array_2[i] <= 7630) 
 {
    TDS_entrada_calculado_array[i]_array[i] = 7.7013840097 * Math.pow(10, -20) * Math.exp(Math.pow(-90.475562243 - Math.log(FeedConductivity_array_2[i]), 2) / 188.88442227);
 }
 if (FeedConductivity_array_2[i] > 7630) {
    TDS_entrada_calculado_array[i]_array[i] = 8.0090966 * Math.pow(10, -11) * Math.exp(Math.pow(-50.645805186 - Math.log(FeedConductivity_array_2[i]), 2) / 112.483950289);
 }
}

let TDS_entrada_calculado_array[i]_value = TDS_entrada_calculado_array[i]_array[k-100];

 
 console.log("capturando último valor [posição] do dado na array do TDS_entrada_calculado_array[i]")
 console.log(TDS_entrada_calculado_array[i]_value);

//cálculo do TDS ENTRADA (sem fórmula e multiplicadopor 0.7 apenas) (ppm)
let TDS_entrada_array = [];
for (let i=0; i < FeedConductivity_array_2.length+1; i++){
    TDS_entrada_array[i] = FeedConductivity_array_2[i]*0.7;
}

let TDS_entrada_value = TDS_entrada_array[k-100];


console.log("capturando último valor [posição] do dado na array do TDS_entrada")
console.log(TDS_entrada_value);

 //cálculo do TDS PERMEADO CALCULADO (ppm)
 let TDS_permeado_calculado_array = [];
 
 for (let i=0; i < PermConductivity_array_2.length+1; i++){
     if (PermConductivity_array_2[i] === 0) 
     { 
         TDS_permeado_calculado_array[i] = 0;
     }
     if (PermConductivity_array_2[i] > 0 && PermConductivity_array_2[i] <= 7630) 
     {
         TDS_permeado_calculado_array[i] = 7.7013840097 * Math.pow(10, -20) * Math.exp(Math.pow(-90.475562243 - Math.log(PermConductivity_array_2[i]), 2) / 188.88442227);
     }
     if (PermConductivity_array_2[i] > 7630) 
     {
         TDS_permeado_calculado_array[i] = 8.0090966 * Math.pow(10, -11) * Math.exp(Math.pow(-50.645805186 - Math.log(PermConductivity_array_2[i]), 2) / 112.483950289);
     }
    }

        let TDS_permeado_calculado_value = TDS_permeado_calculado_array[k-100];
        console.log("capturando último valor [posição] do dado na array do TDS_permeado_calculado_array[i]")
        console.log(TDS_permeado_calculado_value);

 //cálculo do TDS PERMEADO (ppm)
    let TDS_permeado_array = [];
    for (let i=0; i < PermConductivity_array_2.length+1; i++){
        TDS_permeado_array[i] = PermConductivity_array_2[i]*0.7;
    }

    let TDS_permeado_value = TDS_permeado_array[k-100];

     console.log("capturando último valor [posição] do dado na array do TDS_permeado")
     console.log(TDS_permeado_value);

 
//cálculo TEMPERATURA CORREÇÃO
let Temp_correcao_array =[];

for (let i=0; i < FeeTemperature_array_2.length+1; i++){
 if (FeeTemperature_array_2[i] <= 0) 
 { 
     Temp_correcao_array[i] = 0;
 }
 if (FeeTemperature_array_2[i] > 0 ) 
 {
     Temp_correcao_array[i] = Math.exp(2640 * ((1 / 298.15) - 1 / (FeeTemperature_array_2[i] + 273.15)));
 }
}

let Temp_correcao_value = Temp_correcao_array[k-100];
 console.log("capturando último valor [posição] do dado na array do Temp_correcao_array[i]")
 console.log(Temp_correcao_value);

 //cálculo CONCENTRAÇÃO MÉDIA CALCULADA ENTRADA (ppm)
 let conc_media_calculada_entrada_array = [];
 
 for (let i=0; i < PermFlow_array_2.length+1; i++){
     if (PermFlow_array_2[i] > 0) 
     { 
        if (FeedConductivity_array_2[i] > 0)
        {
         conc_media_calculada_entrada_array[i] = TDS_entrada_calculado_array[i] * Math.log(1 / (1 - PermFlow_array_2[i] / FeedFlow_array_2[i])) / (PermFlow_array_2[i] / FeedFlow_array_2[i]); 
        }
        if (FeedConductivity_array_2[i] <= 0)
        {
         conc_media_calculada_entrada_array[i] = TDS_entrada_array[i] * Math.log(1 / (1 - PermFlow_array_2[i] / FeedFlow_array_2[i])) / (PermFlow_array_2[i] / FeedFlow_array_2[i]);   
        }
     }
     if (PermFlow_array_2[i] <= 0)
     {
     conc_media_calculada_entrada_array[i] = 0;
     }
    }

        let conc_media_calculada_entrada_value = conc_media_calculada_entrada_array[k-100];

        console.log("capturando último valor [posição] do dado na array do conc_media_calculada_entrada_array[i]")
        console.log(conc_media_calculada_entrada_value);
 
//cálculo PRESSÃO OSMÓTICA ENTRADA (kgf/cm²)
let pressao_osmotica_entrada_array = [];

for (let i=0; i < PermFlow_array_2.length+1; i++){
if (FeedPressure_array_2[i] > 0 && FeeTemperature_array_2[i] > 0)
{
pressao_osmotica_entrada_array[i] = 0.0385 * conc_media_calculada_entrada_array[i] * (FeeTemperature_array_2 + 273.15) / ((1000 - (conc_media_calculada_entrada_array[i] / 1000)) * 14.25);
}
if (FeedPressure_array_2[i] <= 0 || FeeTemperature_array_2[i] <= 0 )
{
    pressao_osmotica_entrada_array[i] = 0;
}
}

let pressao_osmotica_entrada_value = pressao_osmotica_entrada_array[k-100];
console.log("capturando último valor [posição] do dado na array do pressao_osmotica_entrada")
console.log(pressao_osmotica_entrada_value);

//cálculo PRESSÃO OSMÓTICA PERMEADO (kgf/cm²)
let pressao_osmotica_permeado_array = [];

for (let i=0; i < PermFlow_array_2.length+1; i++){
    if (FeedPressure_array_2[i] <= 0)
    {
        pressao_osmotica_permeado_array[i] = 0;
    }
    if (FeedPressure_array_2[i] > 0 && PermConductivity_array_2[i] > 0 && FeeTemperature_array_2[i] > 0)
    {
        pressao_osmotica_permeado_array[i] = ((0.0385 * TDS_permeado_calculado_array[i] * (FeeTemperature_array_2[i] + 273.15)) / (1000 - (TDS_permeado_calculado_array[i] / 1000))) / 14.25;
    }
    if (FeedPressure_array_2[i] > 0 && PermConductivity_array_2[i] > 0 && FeeTemperature_array_2[i] <= 0)
    {
        pressao_osmotica_permeado_array[i] = 0;
    }
    if (FeedPressure_array_2[i] > 0 && PermConductivity_array_2[i] <= 0)
    {
        if (TDS_permeado_array[i] <=0 || FeeTemperature_array_2[i] <= 0)
        {
            pressao_osmotica_permeado_array[i] = 0;
        }
        if (TDS_permeado_array[i] > 0 && FeeTemperature_array_2[i] > 0)
        {
            pressao_osmotica_permeado_array[i] = ((0.0385 * TDS_permeado_array[i] * (FeeTemperature_array_2[i] + 273.15)) / (1000 - (TDS_permeado_array[i] / 1000))) / 14.25;
        }
    }
}

let pressao_osmotica_permeado_value = pressao_osmotica_permeado_array[k-100];

    console.log("capturando último valor [posição] do dado na array do pressao_osmotica_permeado")
    console.log(pressao_osmotica_permeado_value);



 // cálculo da PRESSÃO NET DRIVING
 let pressao_net_driving_array = [];

 for (let i=0; i < PermFlow_array_2.length+1; i++){
     if (FeedPressure_array_2[i] > 0)
     {
         pressao_net_driving_array[i] = FeedPressure_array_2[i] - (PressaoDif_array[i] / 2) - pressao_osmotica_entrada_array[i] - pressao_permeado + pressao_osmotica_permeado_array[i];
     }
     if (FeedPressure_array_2[i] <= 0)
     {
         pressao_net_driving_array[i] = 0;
     }
    }

    let pressao_net_driving_value = pressao_net_driving_array[k-100];

     console.log("capturando último valor [posição] do dado na array do pressao_net_driving")
     console.log(pressao_net_driving);
 
  
    //cálculo VAZÃO NORMALIZADA DO PERMEADO (m³/h)
    let vazao_normalizada_permeado_array = [];
    
    for (let i=0; i < PermFlow_array_2.length+1; i++){
        if (PermFlow_array_2[i] > 0)
        {
            vazao_normalizada_permeado_array[i] = (pressao_net_driving_zero * Temp_correcao_zero) / (pressao_net_driving_array[i] * Temp_correcao_array[i]) * PermFlow_array_2[i];
        }
        if (PermFlow_array_2[i] <= 0)
        {
            vazao_normalizada_permeado_array[i] = 0;
        }
    }

    let vazao_normalizada_permeado_value = vazao_normalizada_permeado_array[k-100];

    console.log("capturando último valor [posição] do dado na array do vazao_normalizada_permeado")
    console.log(vazao_normalizada_permeado_value);

         //cálculo da PASSAGEM SAL NORMALIZADA PERMEADO (%)
         let passagem_normalizada_array = [];
         
         for (let i=0; i < PermFlow_array_2.length+1; i++){
             if (PermFlow_array_2[i] <= 0)
            {
             passagem_normalizada_array[i] = 0;
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] > 0)
            {
             passagem_normalizada_array[i] = TDS_permeado_calculado_array[i] * PermFlow_array_2[i] * Temp_correcao_zero * conc_media_calculada_entrada_zero / (vazao_permeado_zero * Temp_correcao_array[i] * conc_media_calculada_entrada_array[i] * TDS_entrada_calculado_zero) * 100;
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] <= 0 && TDS_entrada_array[i] > 0)
            {
             passagem_normalizada_array[i] = TDS_permeado_array[i] * PermFlow_array_2[i] * Temp_correcao_zero * conc_media_calculada_entrada_zero / (vazao_permeado_zero * Temp_correcao_array[i] * conc_media_calculada_entrada_array[i] * TDS_entrada_calculado_zero) * 100;
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] <= 0 && TDS_entrada_array[i] <= 0)
            {
             passagem_normalizada_array[i] = 0;
            }
        }
         
        let passagem_normalizada_value = passagem_normalizada_array[k-100];

        console.log("capturando último valor [posição] do dado na array do passagem_normalizada_value")
        console.log(passagem_normalizada_value);

            //cálculo REJEIÇÃO SAL NORMALIZADA PERMEADO (%)
        let rejeicao_normalizada_array = [];
        
            if (PermFlow_array_2[i] <= 0)
            {
                rejeicao_normalizada_array[i] = 0;
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] > 0)
            {
                rejeicao_normalizada_array[i] = 100 - passagem_normalizada_array[i];
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] <= 0 && TDS_entrada_array[i] > 0)
            {
                rejeicao_normalizada_array[i] = 100 - passagem_normalizada_array[i];
            }
            if (PermFlow_array_2[i] > 0 && FeedConductivity_array_2[i] <= 0 && TDS_entrada_array[i] <= 0)
            {
                rejeicao_normalizada_array[i] = 0;
            }
            
            let rejeicao_normalizada_value = rejeicao_normalizada_array[k-100];

            console.log("capturando último valor [posição] do dado na array do rejeicao_normalizada")
            console.log(rejeicao_normalizada_value);

           

        //----------------------------------------FIM DOS CÁLCULOS-----------------------------------------------------



            //plotagem dos arrays limpos
            this.setState({
                chartData:{
                    labels:data_array_1,
                    datasets: [
                        {
                            label: "teste",
                            data: PressaoDif_array,
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