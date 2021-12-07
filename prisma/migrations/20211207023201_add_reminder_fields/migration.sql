/*
  Warnings:

  - You are about to drop the column `temperature` on the `reminders` table. All the data in the column will be lost.
  - Added the required column `max_temp` to the `reminders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_temp` to the `reminders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp` to the `reminders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reminders" DROP COLUMN "temperature",
ADD COLUMN     "max_temp" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "min_temp" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temp" DOUBLE PRECISION NOT NULL;
