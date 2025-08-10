import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAllTables1754753838418 implements MigrationInterface {
    name = 'CreateAllTables1754753838418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`patient\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NULL, \`contactNumber\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`patient\``);
    }

}
