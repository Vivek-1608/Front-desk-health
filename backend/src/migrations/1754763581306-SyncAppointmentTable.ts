import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncAppointmentTable1754763581306 implements MigrationInterface {
    name = 'SyncAppointmentTable1754763581306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_5ce4c3130796367c93cd817948e\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`contactNumber\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`appointmentDate\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`patientId\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`reason\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`appointmentTime\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`patientName\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`patientName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`appointmentTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`contactNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`appointmentDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`reason\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`patientId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`availability\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`availability\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`availability\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`availability\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_5ce4c3130796367c93cd817948e\` FOREIGN KEY (\`patientId\`) REFERENCES \`patient\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_5ce4c3130796367c93cd817948e\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`availability\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`availability\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`availability\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`availability\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`patientId\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`reason\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`appointmentDate\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`contactNumber\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`appointmentTime\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`patientName\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`patientName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`appointmentTime\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`reason\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`patientId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`appointmentDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`contactNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_5ce4c3130796367c93cd817948e\` FOREIGN KEY (\`patientId\`) REFERENCES \`patient\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
