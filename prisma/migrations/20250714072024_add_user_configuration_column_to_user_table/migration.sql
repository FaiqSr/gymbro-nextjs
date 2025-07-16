-- AlterTable
ALTER TABLE `User` ADD COLUMN `metode` ENUM('Full Body', 'Upper-Lower') NULL,
    ADD COLUMN `type` ENUM('strength', 'bulking', 'cutting') NULL;
