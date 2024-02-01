-- CreateTable
CREATE TABLE `highscore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(3) NOT NULL,
    `score` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
