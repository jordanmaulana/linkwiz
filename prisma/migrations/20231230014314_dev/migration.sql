-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_slug_key" ON "Links"("slug");
