-- CreateTable
CREATE TABLE `ToDo` (
    `id` VARCHAR(191) NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `heading` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `isDone` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
