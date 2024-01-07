-- AlterTable
ALTER TABLE "Agents" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Links" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "deletedAt" TIMESTAMP(3);
