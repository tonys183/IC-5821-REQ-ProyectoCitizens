-- CreateTable
CREATE TABLE "alert" (
    "alert_id" SERIAL NOT NULL,
    "muni_id" INTEGER,
    "alert_title" VARCHAR(100),
    "alert_date" DATE,
    "alert_time" TIME(6),
    "description" TEXT,

    CONSTRAINT "alert_pkey" PRIMARY KEY ("alert_id")
);

-- CreateTable
CREATE TABLE "canton" (
    "canton_id" SERIAL NOT NULL,
    "canton_name" VARCHAR(100),

    CONSTRAINT "canton_pkey" PRIMARY KEY ("canton_id")
);

-- CreateTable
CREATE TABLE "district" (
    "district_id" SERIAL NOT NULL,
    "district_name" VARCHAR(100),

    CONSTRAINT "district_pkey" PRIMARY KEY ("district_id")
);

-- CreateTable
CREATE TABLE "municipality" (
    "muni_id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "municipality_pkey" PRIMARY KEY ("muni_id")
);

-- CreateTable
CREATE TABLE "neighbor" (
    "identification" INTEGER NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "second_last_name" VARCHAR(100),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" INTEGER,

    CONSTRAINT "neighbor_pkey" PRIMARY KEY ("identification")
);

-- CreateTable
CREATE TABLE "problem" (
    "problem_id" SERIAL NOT NULL,
    "problem_type_id" INTEGER,
    "problem_name" TEXT,

    CONSTRAINT "problem_pkey" PRIMARY KEY ("problem_id")
);

-- CreateTable
CREATE TABLE "problem_type" (
    "problem_type_id" SERIAL NOT NULL,
    "type_name" TEXT,

    CONSTRAINT "problem_type_pkey" PRIMARY KEY ("problem_type_id")
);

-- CreateTable
CREATE TABLE "report" (
    "report_id" SERIAL NOT NULL,
    "neighbor_id" INTEGER,
    "report_title" VARCHAR(100),
    "problem_id" INTEGER,
    "canton_id" INTEGER,
    "district" INTEGER,
    "neighborhood" VARCHAR(100),
    "street" VARCHAR(100),
    "report_date" DATE,
    "report_time" TIME(6),
    "status" VARCHAR(100) DEFAULT 'Waiting',

    CONSTRAINT "report_pkey" PRIMARY KEY ("report_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "neighbor_email_key" ON "neighbor"("email");

-- AddForeignKey
ALTER TABLE "alert" ADD CONSTRAINT "alert_muni_id_fkey" FOREIGN KEY ("muni_id") REFERENCES "municipality"("muni_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_problem_type_id_fkey" FOREIGN KEY ("problem_type_id") REFERENCES "problem_type"("problem_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_canton_id_fkey" FOREIGN KEY ("canton_id") REFERENCES "canton"("canton_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_district_fkey" FOREIGN KEY ("district") REFERENCES "district"("district_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_neighbor_id_fkey" FOREIGN KEY ("neighbor_id") REFERENCES "neighbor"("identification") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problem"("problem_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
