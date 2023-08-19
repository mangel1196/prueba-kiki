import { Container } from 'src/dto/container';
import { ContainerService } from 'src/service/container.service';
export declare class ContainerController {
    private readonly containerService;
    constructor(containerService: ContainerService);
    selectContainersFromJSON(request: SelectContainersRequest): string;
}
declare class SelectContainersRequest {
    budget: number;
    containers: Container[];
}
export {};
