-- CreateTable
CREATE TABLE "UserTable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 0,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_name_key" ON "UserTable"("name");
