/*
  Warnings:

  - You are about to drop the column `is_active` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `pin` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_phone_key";

-- AlterTable
ALTER TABLE "Links" DROP COLUMN "is_active",
DROP COLUMN "user_id",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "phone",
DROP COLUMN "pin",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
