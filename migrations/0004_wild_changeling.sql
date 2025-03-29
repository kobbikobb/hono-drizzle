UPDATE "users" SET "nickname" = "username" WHERE "nickname" IS NULL;
ALTER TABLE "users" ALTER COLUMN "nickname" SET NOT NULL;
