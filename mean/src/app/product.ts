export class Product{
     pid: number;
    Name: string;
    Price: number;
    Gst: number;
    Quantity: number;
 
}

export class Bill{
    pid : number;
    Name: string;
   Product: number;
   Price: number;
   Gst: number;
   Quantity: number;

}

export class Selected{
    pid: number;
   Name: string;
   Price: number;
   Gst: number;
   Quantity: number;
   oners:number;
}
