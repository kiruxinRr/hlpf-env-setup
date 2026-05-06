import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FinalFixTable1777573062488 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
