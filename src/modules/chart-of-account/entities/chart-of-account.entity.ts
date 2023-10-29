import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'chart-of-accounts',
})
export class ChartOfAccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({
    type: String,
    unique: true,
    nullable: false,
  })
  account: string;

  @Column({
    type: String,
    unique: true,
    nullable: true,
  })
  code?: string; // CA-000001

  @Column({
    type: Boolean,
    default: true,
  })
  isAccount: boolean;

  @Column({
    type: Boolean,
    default: false,
  })
  lockedBySystem: boolean; // no one can edit added during seeds

  @Column({
    type: Boolean,
    default: false,
  })
  lockedByAdmin: boolean; // only admin can edit

  @Column({
    type: String,
    unique: true,
    nullable: true,
  })
  baseName?: string;

  @Column({
    type: Number,
    default: 0,
    nullable: true,
  })
  counter?: number;

  @Column({
    type: String,
    nullable: false, // to make tree => rootId/parentId
  })
  namespace: string;
}
