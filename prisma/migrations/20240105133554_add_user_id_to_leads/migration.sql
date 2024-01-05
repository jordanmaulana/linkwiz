/*
  Warnings:

  - Added the required column `userId` to the `Leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leads" ADD COLUMN     "userId" TEXT DEFAULT '7f7426c9-b642-4c23-a2f5-55f826d80d46' NOT NULL;

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
