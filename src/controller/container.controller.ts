import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { IsArray, IsInt, Min } from 'class-validator';
import { Container } from 'src/dto/container';
import { ContainerService } from 'src/service/container.service'; 

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

    return this.containerService.selectContainers(budget, containers);
  }
}

class SelectContainersRequest {
    @IsInt()
    @Min(1)
    budget: number;
  
    @IsArray()
    @IsInt({ each: true })
    containers: Container[];
  }
    
 