CREATE TABLE `study_achievement_catalog` (
	`id` varchar(96) NOT NULL,
	`rank` int NOT NULL,
	`rankName` varchar(80) NOT NULL,
	`icon` varchar(32) NOT NULL,
	`name` varchar(180) NOT NULL,
	`description` text NOT NULL,
	`metric` varchar(48) NOT NULL,
	`threshold` int NOT NULL,
	`rewardXp` int NOT NULL,
	`rewardFragments` int NOT NULL,
	`titleId` varchar(96),
	`titleMeaning` text,
	`difficulty` varchar(32) NOT NULL,
	`badgeLabel` varchar(120) NOT NULL,
	`encouragement` text NOT NULL,
	`animation` varchar(32) NOT NULL,
	`enabled` boolean NOT NULL DEFAULT true,
	`deletedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_achievement_catalog_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `study_achievement_progress` (
	`accountId` varchar(64) NOT NULL,
	`achievementId` varchar(96) NOT NULL,
	`progress` int NOT NULL DEFAULT 0,
	`unlockedAt` timestamp,
	`claimedAt` timestamp,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_achievement_progress_pk` PRIMARY KEY(`accountId`,`achievementId`)
);
--> statement-breakpoint
CREATE TABLE `study_audit_logs` (
	`id` varchar(64) NOT NULL,
	`actorAccountId` varchar(64),
	`targetAccountId` varchar(64),
	`action` varchar(64) NOT NULL,
	`entityType` varchar(64) NOT NULL,
	`entityId` varchar(128),
	`beforeData` text,
	`afterData` text,
	`reason` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `study_audit_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `study_piece_transactions` (
	`id` varchar(64) NOT NULL,
	`accountId` varchar(64) NOT NULL,
	`pieceTypeId` varchar(96) NOT NULL,
	`delta` int NOT NULL,
	`kind` varchar(32) NOT NULL,
	`idempotencyKey` varchar(160) NOT NULL,
	`referenceType` varchar(64),
	`referenceId` varchar(128),
	`metadata` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `study_piece_transactions_id` PRIMARY KEY(`id`),
	CONSTRAINT `study_piece_transactions_idempotency_idx` UNIQUE(`accountId`,`idempotencyKey`)
);
--> statement-breakpoint
CREATE TABLE `study_piece_types` (
	`id` varchar(96) NOT NULL,
	`name` varchar(120) NOT NULL,
	`ordinal` int NOT NULL,
	`unitValue` int NOT NULL DEFAULT 1,
	`enabled` boolean NOT NULL DEFAULT true,
	`deletedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_piece_types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `study_title_catalog` (
	`id` varchar(96) NOT NULL,
	`achievementId` varchar(96) NOT NULL,
	`name` varchar(180) NOT NULL,
	`meaning` text NOT NULL,
	`enabled` boolean NOT NULL DEFAULT true,
	`deletedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_title_catalog_id` PRIMARY KEY(`id`),
	CONSTRAINT `study_title_achievement_idx` UNIQUE(`achievementId`)
);
--> statement-breakpoint
CREATE TABLE `study_user_pieces` (
	`accountId` varchar(64) NOT NULL,
	`pieceTypeId` varchar(96) NOT NULL,
	`balance` int NOT NULL DEFAULT 0,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_user_pieces_pk` PRIMARY KEY(`accountId`,`pieceTypeId`)
);
--> statement-breakpoint
CREATE INDEX `study_achievement_rank_idx` ON `study_achievement_catalog` (`rank`);--> statement-breakpoint
CREATE INDEX `study_achievement_title_idx` ON `study_achievement_catalog` (`titleId`);--> statement-breakpoint
CREATE INDEX `study_achievement_progress_account_idx` ON `study_achievement_progress` (`accountId`);--> statement-breakpoint
CREATE INDEX `study_audit_logs_target_idx` ON `study_audit_logs` (`targetAccountId`,`createdAt`);--> statement-breakpoint
CREATE INDEX `study_audit_logs_entity_idx` ON `study_audit_logs` (`entityType`,`entityId`);--> statement-breakpoint
CREATE INDEX `study_piece_transactions_account_idx` ON `study_piece_transactions` (`accountId`,`createdAt`);--> statement-breakpoint
CREATE INDEX `study_piece_types_ordinal_idx` ON `study_piece_types` (`ordinal`);--> statement-breakpoint
CREATE INDEX `study_user_pieces_account_idx` ON `study_user_pieces` (`accountId`);