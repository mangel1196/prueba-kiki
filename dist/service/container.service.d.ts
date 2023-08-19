import { Boat } from 'src/dto/boat';
import { Container } from 'src/dto/container';
export declare class ContainerService {
    selectContainers(maxLoad: number, containers: Container[]): string;
    fillBoat(boat: Boat, containers: Container[], full: boolean, boatOpt: Boat): void;
}
