/*
  Warnings:

  - You are about to drop the column `neighbor_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the `alert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `municipality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `neighbor` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('NEIGHBOR', 'MUNICIPALITY');

-- DropForeignKey
ALTER TABLE "alert" DROP CONSTRAINT "alert_muni_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_neighbor_id_fkey";

-- AlterTable
ALTER TABLE "report" DROP COLUMN "neighbor_id",
ADD COLUMN     "author_id" INTEGER;

-- DropTable
DROP TABLE "alert";

-- DropTable
DROP TABLE "municipality";

-- DropTable
DROP TABLE "neighbor";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'NEIGHBOR',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "neighbor_profiles" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "second_last_name" VARCHAR(100),
    "identification" INTEGER NOT NULL,
    "phone_number" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "neighbor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "municipality_profiles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "canton" VARCHAR(100) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "municipality_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "neighbor_profiles_identification_key" ON "neighbor_profiles"("identification");

-- CreateIndex
CREATE UNIQUE INDEX "neighbor_profiles_userId_key" ON "neighbor_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "municipality_profiles_userId_key" ON "municipality_profiles"("userId");

-- AddForeignKey
ALTER TABLE "neighbor_profiles" ADD CONSTRAINT "neighbor_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipality_profiles" ADD CONSTRAINT "municipality_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
