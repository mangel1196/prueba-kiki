import { Container } from "src/dto/container";
import { ContainerService } from "src/service/container.service";

describe('selectContainers', () => {

    // Tests that the method returns a string with the names of the selected containers separated by commas when there are containers that fit in the boat.
    it('should return a string with the names of the selected containers separated by commas', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 30;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('container1, container2');
    });

    // Tests that the method returns an empty string when no containers fit in the boat.
    it('should return an empty string when no containers fit in the boat', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 5;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('');
    });

    // Tests that the method returns a string with the name of the only container that fits in the boat.
    it('should return a string with the name of the only container that fits in the boat', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 10;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('container1');
    });

    // Tests that the method selects the containers with the highest value and lowest cost that fit in the boat, but with a maximum of one container of each name.
    it('should select containers with highest value and lowest cost, with maximum of one container of each name', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 30;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('container2');
    });

    // Tests that the method selects the containers with the highest value and lowest cost that fit in the boat, but with a maximum of two containers of each name.
    it('should select containers with highest value and lowest cost, with maximum of two containers of each name', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 30;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('container1, container2');
    });

    // Tests that the method selects the containers with the highest value and lowest cost that fit in the boat, but with a maximum of three containers of each name.
    it('should select containers with highest value and lowest cost, with maximum of three containers of each name', () => {
      const container1 = new Container('container1', 10, 20);
      const container2 = new Container('container2', 15, 25);
      const container3 = new Container('container3', 5, 15);
      const containers = [container1, container2, container3];
      const maxLoad = 30;
      const containerService = new ContainerService();
      const result = containerService.selectContainers(maxLoad, containers);
      expect(result).toBe('container1, container2, container3');
    });
});
