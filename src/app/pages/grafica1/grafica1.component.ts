import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

public label1: string[] = ["sin nombre 1","sin nombre 2","sin nombre 3",]
public data1: number[] = [1,555,222];

public label2: string[] = ["compras buenas","compras malas","compras masomenos","compras tremendas"]
public data2: number[] = [444,222,111,2222];

public label3: string[] = ["fijos berretas","otro fijo malas","un fijitpo masomenos","fijeri tremendas","fijeri frijol"]
public data3: number[] = [444,222,111,2222,131];

public label4: string[] = ["fijos berretas","otro fijo malas","un fijitpo masomenos","fijeri tremendas","fijeri frijol"]
public data4: number[] = [444,222,111,2222,1231];



}
