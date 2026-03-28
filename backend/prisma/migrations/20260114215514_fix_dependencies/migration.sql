-- DropForeignKey
ALTER TABLE "RaceParticipant" DROP CONSTRAINT "RaceParticipant_game_account_id_fkey";

-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_observer_id_fkey";

-- DropForeignKey
ALTER TABLE "RaceWitness" DROP CONSTRAINT "RaceWitness_suspect_nickname_suspect_server_fkey";

-- AddForeignKey
ALTER TABLE "RaceParticipant" ADD CONSTRAINT "RaceParticipant_game_account_id_fkey" FOREIGN KEY ("game_account_id") REFERENCES "GameAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_observer_id_fkey" FOREIGN KEY ("observer_id") REFERENCES "GameAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceWitness" ADD CONSTRAINT "RaceWitness_suspect_nickname_suspect_server_fkey" FOREIGN KEY ("suspect_nickname", "suspect_server") REFERENCES "GameAccount"("nickname", "server") ON DELETE CASCADE ON UPDATE CASCADE;
