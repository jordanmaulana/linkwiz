-- DropForeignKey
ALTER TABLE "Agents" DROP CONSTRAINT "Agents_linkId_fkey";

-- DropIndex
DROP INDEX "Agents_phone_key";

-- AlterTable
ALTER TABLE "Agents" ALTER COLUMN "linkId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Links"("id") ON DELETE SET NULL ON UPDATE CASCADE;
