CREATE TABLE `study_accounts` (
	`id` varchar(64) NOT NULL,
	`name` varchar(120) NOT NULL,
	`normalizedName` varchar(160) NOT NULL,
	`code` varchar(48) NOT NULL,
	`role` enum('Member','Admin','Founder') NOT NULL DEFAULT 'Member',
	`passwordHash` text,
	`locked` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_accounts_id` PRIMARY KEY(`id`),
	CONSTRAINT `study_accounts_normalizedName_unique` UNIQUE(`normalizedName`),
	CONSTRAINT `study_accounts_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `study_profiles` (
	`accountId` varchar(64) NOT NULL,
	`data` text NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_profiles_accountId` PRIMARY KEY(`accountId`)
);
--> statement-breakpoint
CREATE TABLE `study_sessions` (
	`tokenHash` varchar(64) NOT NULL,
	`accountId` varchar(64) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `study_sessions_tokenHash` PRIMARY KEY(`tokenHash`)
);
--> statement-breakpoint
CREATE TABLE `study_settings` (
	`id` varchar(40) NOT NULL,
	`data` text NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_settings_id` PRIMARY KEY(`id`)
);
