-- DropForeignKey
ALTER TABLE "LeadBuffers" DROP CONSTRAINT "LeadBuffers_agentId_fkey";

-- DropForeignKey
ALTER TABLE "LeadBuffers" DROP CONSTRAINT "LeadBuffers_linkId_fkey";

-- DropForeignKey
ALTER TABLE "Leads" DROP CONSTRAINT "Leads_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Leads" DROP CONSTRAINT "Leads_linkId_fkey";

-- AlterTable
ALTER TABLE "LeadBuffers" ALTER COLUMN "agentId" DROP NOT NULL,
ALTER COLUMN "linkId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Leads" ALTER COLUMN "agentId" DROP NOT NULL,
ALTER COLUMN "linkId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LeadBuffers" ADD CONSTRAINT "LeadBuffers_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadBuffers" ADD CONSTRAINT "LeadBuffers_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Links"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leads" ADD CONSTRAINT "Leads_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Links"("id") ON DELETE SET NULL ON UPDATE CASCADE;
