import { Injectable, Logger } from "@nestjs/common"; 
import { Container } from '../dto/container';
import { InjectRepository } from "@nestjs/typeorm";
import { Requests } from "../entity/Requests";
import { Repository } from "typeorm";

@Injectable()
export class ContainerService {

  constructor(
    @InjectRepository(Requests) private readonly repository: Repository<Requests>,
  ) {}
      
  saveMetric(selectedContainers: Container[], budget:number) {
    
    const request = new Requests()

    request.initialBudget = budget;
    request.aprovedBudget = selectedContainers.map(element => element.cost).reduce((valorAnterior, valorActual, indice, vector) => valorAnterior + valorActual);

    return this.repository.save(request);
  }

  selectContainers(budget: number, containers: Container[]): Container[] {
    const n = containers.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      const container = containers[i - 1];
      for (let j = 0; j <= budget; j++) {
        if (container.cost <= j) {
          dp[i][j] = Math.max(dp[i - 1][j], container.value + dp[i - 1][j - container.cost]);
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    const selectedContainers: Container[] = [];
    let j = budget;
    for (let i = n; i > 0 && j > 0; i--) {
      if (dp[i][j] !== dp[i - 1][j]) {
        selectedContainers.push(containers[i - 1]);
        j -= containers[i - 1].cost;
      }
    }
    Logger.log("asdasdasdas");
    console.log(this.saveMetric(selectedContainers, budget));

    return selectedContainers;
  }
}
 