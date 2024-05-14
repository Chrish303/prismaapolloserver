-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);
