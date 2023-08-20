import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'requests' })
export class Requests {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'integer',name: "initial_budget"})
    initialBudget: number;

    @Column({ type: 'integer', name: "aproved_budget"})
    aprovedBudget: number;

}