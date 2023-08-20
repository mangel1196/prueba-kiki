import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger'; 
import { SelectContainersRequest } from '../dto/request/select.container.request';
import { ContainerService } from '../service/container.service'; 

@ApiTags('knapsack')
@Controller('containers')
export class ContainerController {
  constructor(private readonly containerService: ContainerService) {}

  @ApiOperation({ summary: 'Seleccionar contenedores dentro de un presupuesto' })
  @ApiResponse({ status: 200, description: 'Nombres de contenedores seleccionados', type: [String] })
  @ApiBadRequestResponse({ description: 'Parámetros inválidos' })
  @Post('select')
  selectContainersFromJSON(@Body(new ValidationPipe()) request: SelectContainersRequest): string {
    const { budget, containers } = request; 

    return this.containerService.selectContainers(budget, containers).map(element => element.name).join(", ");
  }

  @ApiOperation({ summary: 'Seleccionar contenedores dentro de un presupuesto' })
  @ApiResponse({ status: 200, description: 'Nombres de contenedores seleccionados', type: [String] })
  @ApiBadRequestResponse({ description: 'Parámetros inválidos' })
  @Post('/stats')
  stats(): any {
    return this.containerService.getStats();
  }
}
