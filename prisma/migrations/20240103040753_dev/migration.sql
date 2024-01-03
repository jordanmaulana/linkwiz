/*
  Warnings:

  - A unique constraint covering the columns `[agentId]` on the table `LeadBuffers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LeadBuffers_agentId_key" ON "LeadBuffers"("agentId");
