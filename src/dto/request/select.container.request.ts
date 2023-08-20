import { IsArray, IsInt, Min,  } from "class-validator";
import { Container } from "../container";

export class SelectContainersRequest {
    @IsInt()
    @Min(1)
    budget: number;
  
    @IsArray() 
    containers: Container[];
  }
    
 