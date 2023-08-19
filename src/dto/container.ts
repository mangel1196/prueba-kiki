export class Container {
   
  private readonly name: string;
  private readonly cost: number;
  private readonly value: number;

  getName(): string{
    return this.name;
  }
  getCost(): number{
    return this.cost;
  }
  getValue(): number{
    return this.value;
  }
    
  constructor(name:string, cost:number, value:number){
    this.name = name;
    this.cost = cost;
    this.value = value;
  }
}
 