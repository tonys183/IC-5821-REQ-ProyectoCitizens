-- AlterTable
ALTER TABLE "district" ADD COLUMN     "canton_id" INTEGER;

-- AlterTable
ALTER TABLE "report" ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_canton_id_fkey" FOREIGN KEY ("canton_id") REFERENCES "canton"("canton_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
