import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity("address")
export class Address {
  @ObjectIdColumn()
  id: ObjectID;

  @Column("varchar")
  cep: string;

  @Column("varchar")
  city: string;

  @Column("varchar")
  street: string;

  @Column("varchar")
  number: string;

  @Column("varchar")
  complement: string;

  @Column("varchar")
  state: string;

  @Column("varchar")
  neighborhood: string;
}
